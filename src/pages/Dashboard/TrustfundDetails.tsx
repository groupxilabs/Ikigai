import { Link } from "react-router-dom";
import { Layout } from "../../components/layout/Layout";
import { FaChevronLeft, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

interface IHistory {
  type: string;
  title: string;
  amount: string;
  isDeposit: boolean;
}

export const TrustfundDetails = () => {
  const [showHistory, setShowHistory] = useState(false);

  const [status, setStatus] = useState("");
  const [withdrawals, setWithdrawals] = useState(0.3);
  const [interest, setInterest] = useState(0.3);
  const [goalCreatedOn, setGoalCreated] = useState("12 Nov,2024");

  const toggleShowHistory = () => {
    setShowHistory(!showHistory);
  };

  const history: IHistory[] = [
    {
      type: "Deposit",
      title: "to Home Trust Fund",
      amount: "3.0000",
      isDeposit: true,
    },
  ];

  return (
    <Layout title="Trust Fund">
      <div className="w-full">
        <div className="w-full p-5">
          <Link to={"/trustfund"}>
            <div className="bg-gradient-to-r from-[#8AD4EC99] via-[#EF96FF99] to-[#FF56A999] p-[2px] w-fit rounded-xl cursor-pointer">
              <div className="w-full h-full rounded-inherit bg-black px-5 py-2  text-white flex items-center">
                <span>
                  <FaChevronLeft />
                </span>
                <h3 className="text-xl ml-3"> Back</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="w-full p-5">
          <div className="bg-gradient-to-r from-[#8AD4EC99] via-[#EF96FF99] to-[#FF56A999] p-[2px]  rounded-xl  w-full">
            <div className="w-full h-full rounded-inherit bg-black px-5 py-10  text-white flex items-center flex-col">
              <div className="w-full text-white">
                <h3 className="text-xl">Trust Fund Progress</h3>
              </div>

              <div className="w-full border border-gray-500 rounded-xl p-2 mt-10">
                <div className="w-full flex items-center justify-center flex-col py-3">
                  <div className="bg-gradient-to-r from-[#8AD4EC99] via-[#EF96FF99] to-[#FF56A999]  p-[1px] w-[50px] h-[50px] rounded-full">
                    <div className="w-full h-full bg-black rounded-inherit flex items-center justify-center">
                      <span>
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.22476 3.5C3.44378 3.5 2 4.94377 2 6.72476V17.5C2 19.7091 3.79086 21.5 6 21.5H18C20.2091 21.5 22 19.7091 22 17.5V11.0556C22 8.84684 20.2105 7.05556 18.001 7.05556H14.8897C14.8498 6.99686 14.8038 6.92219 14.7518 6.82912C14.6109 6.57715 14.4738 6.28111 14.3166 5.94151C14.2793 5.86093 14.2409 5.77786 14.201 5.69239C14.0098 5.2827 13.7781 4.80151 13.5099 4.41975C13.2873 4.10286 12.8009 3.5 12.0138 3.5H5.22476ZM12.4877 6.75176C12.5332 6.85036 12.5804 6.95243 12.6288 7.05556H4V6.72476C4 6.04834 4.54834 5.5 5.22476 5.5H11.8219C11.8368 5.51884 11.854 5.54178 11.8734 5.5695C12.026 5.78671 12.1903 6.11316 12.3886 6.5382C12.4206 6.60678 12.4537 6.67835 12.4877 6.75176ZM6 19.5C4.89543 19.5 4 18.6046 4 17.5V9.05556H14.4782C14.4808 9.05561 14.4834 9.05566 14.4861 9.05569C14.4975 9.05584 14.5089 9.0558 14.5203 9.05556H18.001C19.1051 9.05556 20 9.95056 20 11.0556V11.5H18C16.3431 11.5 15 12.8431 15 14.5C15 16.1569 16.3431 17.5 18 17.5H20C20 18.6046 19.1046 19.5 18 19.5H6ZM17 14.5C17 13.9477 17.4477 13.5 18 13.5H20V15.5H18C17.4477 15.5 17 15.0523 17 14.5ZM11.7514 5.42323C11.7514 5.42272 11.7555 5.42566 11.7637 5.43356C11.7555 5.42769 11.7514 5.42374 11.7514 5.42323Z"
                            fill="url(#paint0_linear_182_1354)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_182_1354"
                              x1="2"
                              y1="3.5"
                              x2="22.4268"
                              y2="3.99814"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#8AD4EC" />
                              <stop offset="0.217372" stop-color="#EF96FF" />
                              <stop offset="0.540308" stop-color="#FF56A9" />
                              <stop offset="0.852826" stop-color="#FFAA6C" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </div>

                  <h3 className="text-white">School Fees</h3>
                </div>

                <div className="w-full p-3">
                  <div className="w-full bg-gradient-to-r from-[#8AD4EC99] via-[#EF96FF99] via-[#FF56A999] to-[#FFAA6C99] p-[1px] py-5 px-5 flex flex-col items-center justify-center rounded-xl">
                    <div className="w-full flex items-center justify-center lg:flex-row flex-col">
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                        5 ETH
                      </h3>

                      <p className=" text-white ml-2">~ saved so far 2 ETH</p>
                    </div>

                    <div className="w-full mt-3">
                      <div className="w-full border border-[#672D03B2] h-8 rounded-lg bg-[#262626]">
                        <div
                          className={`w-[50%] bg-gradient-to-r from-[#8AD4EC99] via-[#EF96FF99] to-[#FF56A999] h-full rounded-inherit`}
                        >
                          <h3 className="text-center text-xl text-white">
                            50%
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full px-10 py-3 flex items-center justify-center">
                  <button className="px-5 py-3 bg-gradient-to-r from-[#8AD4EC99] via-[#EF96FF99] via-[#FF56A999] to-[#FFAA6C]  text-white  rounded-2xl ml-5 w-[200px]">
                    Add Funds
                  </button>
                </div>

                <div className="w-full p-3">
                  <div className="w-full flex items-center justify-between text-gray-500">
                    <h3>Goal Status</h3>
                    <h3>{status}</h3>
                  </div>

                  <div className="w-full flex items-center justify-between text-gray-500 mt-3">
                    <h3>Total Withdrawals</h3>
                    <h3>{withdrawals} ETH</h3>
                  </div>

                  <div className="w-full flex items-center justify-between text-gray-500 mt-3">
                    <h3>Interest Gained</h3>
                    <h3>{interest} ETH</h3>
                  </div>

                  <div className="w-full flex items-center justify-between text-gray-500 mt-3">
                    <h3>Goal Created on</h3>
                    <h3>{goalCreatedOn}</h3>
                  </div>
                </div>
              </div>

              <div className="w-full mt-10 p-2">
                <div
                  onClick={toggleShowHistory}
                  className="w-full flex items-center justify-between text-xl text-white mb-5 cursor-pointer"
                >
                  <h3 className="">History</h3>

                  <span>
                    <FaChevronDown />
                  </span>
                </div>

                <div className="w-full">
                  {showHistory &&
                    history.map((x, i) => (
                      <div
                        key={i}
                        className="w-full flex items-center justify-between"
                      >
                        <div className="flex items-center">
                          <div className="h-[50px] w-[50px] bg-[#E7F6EC] rounded-full flex items-center justify-center">
                            <span>
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M15.4419 4.55806C15.686 4.80214 15.686 5.19786 15.4419 5.44194L6.50888 14.375L12.5 14.375C12.8452 14.375 13.125 14.6548 13.125 15C13.125 15.3452 12.8452 15.625 12.5 15.625H5C4.65482 15.625 4.375 15.3452 4.375 15L4.375 7.5C4.375 7.15482 4.65482 6.875 5 6.875C5.34518 6.875 5.625 7.15482 5.625 7.5L5.625 13.4911L14.5581 4.55806C14.8021 4.31398 15.1979 4.31398 15.4419 4.55806Z"
                                  fill="#0F973D"
                                />
                              </svg>
                            </span>
                          </div>

                          <div className="ml-3">
                            <h3>{x.title}</h3>
                            <p className="text-gray-500">{x.type}</p>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-gray-500">
                            {x.isDeposit ? "+" : "-"}
                            {x.amount} ETH
                          </h3>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
