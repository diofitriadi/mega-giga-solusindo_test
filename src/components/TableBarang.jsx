import React, { useState } from "react";
import data from "../api/data";
import AddBarangModal from "./AddBarangModal";
import EditBarangModal from "./EditBarangModal";

const TableBarang = () => {
  const [isBarangModalOpen, setIsBarangModalOpen] = useState(false);
  const handleBarangOpenModal = () => {
    setIsBarangModalOpen(true);
  };

  const handleCloseBarangModal = () => {
    setIsBarangModalOpen(false);
  };

  const [isEditBarangModalOpen, setisEditBarangModalOpen] = useState(false);
  const handleOpenEditBarangModal = () => {
    setisEditBarangModalOpen(true);
  };

  const handleCloseEditBarangModal = () => {
    setisEditBarangModalOpen(false);
  };

  return (
    <>
      <div className="block w-full px-10 py-2 bg-white">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Barang</h3>
          <button
            className=" bg-blue-400 px-3 py-2 shadow rounded-lg text-white text-sm"
            onClick={handleBarangOpenModal}
          >
            Tambah Barang
          </button>
        </div>
      </div>
      <div className="px-16 w-full py-2 bg-white text-sm">
        <table className="table-auto">
          <thead className="bg-gray-300">
            <tr>
              <th className="border px-5 py-2">No</th>
              <th className="border px-5 py-2">Nama Barang</th>
              <th className="border px-5 py-2">Stock</th>
              <th className="border px-5 py-2">Harga</th>
              <th className="border px-5 py-2">Nama Supplier</th>
              <th className="border px-5 py-2">Alamat Supplier</th>
              <th className="border px-5 py-2">No Telp Supplier</th>
              <th className="border px-5 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="border px-5 py-2">{item.id}</td>
                  <td className="border px-5 py-2">{item.name}</td>
                  <td className="border px-5 py-2">{item.stock}</td>
                  <td className="border px-5 py-2">{item.price}</td>
                  <td className="border px-5 py-2">{item.supplierName}</td>
                  <td className="border px-5 py-2">{item.supplierAddress}</td>
                  <td className="border px-5 py-2">{item.supplierPhone}</td>
                  <td className="border px-5">
                    <button
                      onClick={handleOpenEditBarangModal}
                      className="bg-yellow-500 px-1 py-1 m-2 rounded-lg shadow"
                    >
                      Edit
                    </button>
                    <button className="bg-red-500 px-1 py-1 rounded-lg shadow">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <ul className="flex">
            <li className="mr-2">
              <a
                href="#"
                className="px-3 py-1 bg-gray-200 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white"
              >
                1
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="px-3 py-1 bg-blue-500 rounded-md cursor-pointer text-white"
              >
                2
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="px-3 py-1 bg-gray-200 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white"
              >
                3
              </a>
            </li>
            <li className="mr-2">
              <span className="px-3 py-1 bg-gray-200 rounded-md cursor-not-allowed">
                ...
              </span>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="px-3 py-1 bg-gray-200 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white"
              >
                10
              </a>
            </li>
          </ul>
        </div>
      </div>
      <AddBarangModal
        isOpen={isBarangModalOpen}
        onClose={handleCloseBarangModal}
        // onSubmit={handleAddBarang}
      />
      <EditBarangModal
        isOpen={isEditBarangModalOpen}
        onClose={handleCloseEditBarangModal}
        // onSubmit={handleAddBarang}
      />
    </>
  );
};

export default TableBarang;
