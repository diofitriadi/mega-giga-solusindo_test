import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import data from "../api/data";
import Table from "../components/TableBarang";
import TableSupplier from "../components/TableSupplier";
import TableBarang from "../components/TableBarang";
// import AddBarangModal from "../components/AddBarangModal";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("barang");

  // const handleAddBarang = async (formData) => {
  //   try {
  //     const response = await fetch('/api/barang', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(formData)
  //     });

  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className=" w-full bg-white border overflow-hidden shadow rounded-lg mt-5 mr-5">
          <div className="block w-full px-10 py-2 bg-blue-300">
            <p className="text-blue-700 font-semibold">Dashboard</p>
          </div>
          {/* <div className="block w-full px-10 py-2 bg-white">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Barang</h3>
              <button
                className=" bg-blue-400 px-3 py-2 shadow rounded-lg text-white text-sm"
                onClick={handleBarangOpenModal}
              >
                Tambah Barang
              </button>
            </div>
          </div> */}
          {/* <Table /> */}
          {activeTab === "supplier" && <TableSupplier />}
          {activeTab === "barang" && <TableBarang />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
