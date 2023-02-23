import React from "react";
import profilePic from "../assets/download.jpg";
import { CgProfile } from "react-icons/cg";
import { RxDotFilled } from "react-icons/rx";
import TableSupplier from "./TableSupplier";
import Table from "./TableBarang";

function Sidebar({ activeTab, setActiveTab }) {
  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex flex-col h-[92.6vh] w-80 px-6 text-md">
      {/* Kotak 1: Foto dan nama profil */}
      <div className="flex flex-col items-center p-2 gap-4 rounded-t-md border shadow-xl mt-5 ">
        <CgProfile size={180} color={"rgb(96, 165, 250, 1)"} />
      </div>
      <div className="block w-full text-center p-2 py-3 bg-blue-300 rounded-b-md">
        <p className="text-blue-700 font-semibold">John Doe</p>
      </div>
      {/* Kotak 2: Menu dengan list dan barang */}
      <div className="flex flex-col items-center shadow mt-2  border">
        <div className="block w-full text-center p-2 bg-blue-300 shadow-xl rounded-t-md">
          <p className="text-blue-700 font-semibold">Menu</p>
        </div>
        <div className="w-full text-left px-5 rounded-b-md py-2">
          <ul className="text-blue-700 flex flex-col gap-2">
            <li
              className={`mb-2 cursor-pointer ${
                activeTab === "barang"
                  ? "text-blue-500 font-bold"
                  : "text-gray-700"
              }`}
              onClick={() => handleClick("barang")}
            >
              Barang
            </li>
            <li
              className={`mb-2 cursor-pointer ${
                activeTab === "supplier"
                  ? "text-blue-500 font-bold"
                  : "text-gray-700"
              }`}
              onClick={() => handleClick("supplier")}
            >
              Supplier
            </li>
          </ul>
        </div>
      </div>
      {/* Kotak 3: Status online */}
      <div className="flex flex-col items-center mt-2 shadow-xl border rounded-t-md">
        <div className="flex flex-row items-center justify-center w-full py-1 bg-blue-300 rounded-t-md">
          <p className="text-blue-700 font-semibold">Online</p>
          <RxDotFilled size={30} color={"#00FF00"} />
        </div>
        <div className="w-full rounded-b-md py-2 px-5">
          <ul className="text-black flex flex-col gap-2 text-sm">
            <li>Hari online : 2022-10-06</li>
            <li>Waktu online : 11:46:49</li>
          </ul>
        </div>
      </div>
      {/* <div className="flex flex-col p-4 bg-orange-700 rounded-lg mx-5 mt-1">
        <h2 className="text-white font-semibold mb-4 text-center">Online</h2>
        <ul className="text-gray-400 text-sm">
          <li>Hari online : 2020-10-06</li>
          <li>Waktu online : 11:46:49</li>
        </ul>
      </div> */}
    </div>
  );
}

export default Sidebar;
