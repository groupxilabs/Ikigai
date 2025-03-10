import { useCallback, useEffect, useState } from "react";
import { useWillContract } from "../useContracts";
import { useAppKitAccount } from "@reown/appkit/react";
import { toast } from "react-toastify";
// import { ErrorDecoder } from "ethers-decode-error";
// import useRunners from "../useRunners";

export interface IWill {
  amountLeft: number;
  willId: number;
  willName: string;
  tokenAddress: string;
  tokenType: number;
  totalAmount: bigint;
  beneficiaryCount: number;
  activityPeriod: number;
  gracePeriod: number;
}

export const useWills = () => {
  const [isFetching, setIsFetching] = useState(false);

  const [wills, setWills] = useState<IWill[] | null>(null);
  const [refetch, setRefetch] = useState(false);
  const { address } = useAppKitAccount();
  const readOnlyWillRegistry = useWillContract();

  const fetchWills = useCallback(async () => {
    if (!readOnlyWillRegistry) {
      setWills(null);
      return;
    }
    if (!address) {
      setWills(null);
      return;
    }
    try {
      setIsFetching(true);
      const _wills = await readOnlyWillRegistry.getWillsByOwner(address);
      const _data = _wills.map((will: any) => ({
        willId: Number(will.willId),
        willName: will.willName,
        tokenAddress: will.tokenAddress,
        tokenType: Number(will.tokenType),
        totalAmount: will.totalAmount,
        beneficiaryCount: Number(will.beneficiaryCount),
        activityPeriod: Number(will.activityPeriod),
        gracePeriod: Number(will.gracePeriod),
      }));

      setWills(_data);
    } catch (error) {
      setWills(null);
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setIsFetching(false);
      setRefetch(false);
    }
  }, [readOnlyWillRegistry, address]);

  useEffect(() => {
    fetchWills();
  }, [fetchWills]);

  useEffect(() => {
    if (refetch) {
      fetchWills();
    }
  }, [refetch]);

  // const createdWillEventHandler = useCallback(() => {
  //   fetchWills();
  // }, []);

  // useEffect(() => {
  //   if(!readOnlyWillRegistry) return;

  //   readOnlyWillRegistry.on("ProposalCreated", createdWillEventHandler);

  //   return () => {
  //     readOnlyWillRegistry.off(
  //       "ProposalCreated",
  //       createdWillEventHandler
  //     );

  //   };
  // }, [
  //   readOnlyWillRegistry,
  //   createdWillEventHandler
  // ]);

  return { isFetching, wills, fetchWills, setRefetch };
};
