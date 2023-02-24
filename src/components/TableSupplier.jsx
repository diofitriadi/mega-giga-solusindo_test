import React, { useState, useEffect } from "react";
import axios from "axios";
import AddSupplierModal from "./AddSupplierModal";
import EditSupplierModal from "./EditSupplierModal";

const TableSupplier = () => {
  const [dataSupplier, setDataSupplier] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isSupplierModalOpen, setIsSupplierModalOpen] = useState(false);

  const token = localStorage.getItem("token");

  const handleSupplierOpenModal = () => {
    setIsSupplierModalOpen(true);
  };

  const handleCloseSupplierModal = () => {
    setIsSupplierModalOpen(false);
  };
  const [isEditSupplierModalOpen, setisEditSupplierModalOpen] = useState(false);
  const handleOpenEditSupplierModal = () => {
    setisEditSupplierModalOpen(true);
  };

  const handleCloseEditSupplierModal = () => {
    setisEditSupplierModalOpen(false);
  };

  // Get Supplier
  const getSupplier = async () => {
    try {
      setIsLoading(true);

      const result = await axios.get(
        `http://159.223.57.121:8090/supplier/find-all?limit=8&offset=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDataSupplier(result.data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSupplier();
  }, []);

  const handleTambahSupplier = async (formData) => {
    try {
      const response = await axios.post(
        "http://159.223.57.121:8090/supplier/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Add Data Berhasil");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="block w-full px-10 py-2 bg-white">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Tambah Supplier</h3>
          <button
            className=" bg-blue-400 px-3 py-2 shadow rounded-lg text-white text-sm"
            onClick={handleSupplierOpenModal}
          >
            Tambah Supplier
          </button>
        </div>
      </div>
      <div className="px-36 w-full py-2 bg-white text-sm">
        <table className="table-auto">
          <thead className="bg-gray-300">
            <tr>
              <th className="border px-5 py-2">No</th>
              <th className="border px-10 py-2">Nama Supplier</th>
              <th className="border px-20 py-2">Alamat</th>
              <th className="border px-5 py-2">No HP</th>
              <th className="border px-5 py-2">Aksi</th>
            </tr>
          </thead>

          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <tbody>
              {dataSupplier.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td className="border px-5 py-2">{index + 1}</td>
                    <td className="border px-10 py-2">{item.namaSupplier}</td>
                    <td className="border px-20 py-2">{item.alamat}</td>
                    <td className="border px-5 py-2">{item.noTelp}</td>
                    <td className="border px-5">
                      <button
                        className="bg-yellow-500 px-1 py-1 m-2 rounded-lg shadow"
                        onClick={handleOpenEditSupplierModal}
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
          )}
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
      <AddSupplierModal
        isOpen={isSupplierModalOpen}
        onClose={handleCloseSupplierModal}
        onSubmit={handleTambahSupplier}
      />
      <EditSupplierModal
        isOpen={isEditSupplierModalOpen}
        onClose={handleCloseEditSupplierModal}
        // onSubmit={handleAddSupplier}
      />
    </>
  );
};

export default TableSupplier;
