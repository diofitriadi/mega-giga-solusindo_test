import axios from "axios";
import React, { useState, useEffect } from "react";
import data from "../api/data";
import AddBarangModal from "./AddBarangModal";
import EditBarangModal from "./EditBarangModal";

const TableBarang = () => {
  const [dataBarang, setDataBarang] = useState([]);
  const [isBarangModalOpen, setIsBarangModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");

  const handleBarangOpenModal = () => {
    setIsBarangModalOpen(true);
  };

  const handleCloseBarangModal = () => {
    setIsBarangModalOpen(false);
  };

  const [isEditBarangModalOpen, setisEditBarangModalOpen] = useState(false);
  const [isEditBarang, setIsEditBarang] = useState(false);
  const [barangId, setBarangId] = useState("");
  const handleOpenEditBarangModal = (id) => {
    console.log(id);
    setIsEditBarang(true);
    setBarangId(id);
    setisEditBarangModalOpen(true);
  };

  const handleCloseEditBarangModal = () => {
    setisEditBarangModalOpen(false);
  };

  // Get Barang
  const getBarang = async () => {
    try {
      setIsLoading(true);

      const result = await axios.get(
        `http://159.223.57.121:8090/barang/find-all?limit=8&offset=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDataBarang(result.data.data);
      console.log(dataBarang);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBarang();
  }, []);

  // Add Barang
  const handleTambahBarang = async (formData) => {
    try {
      const response = await axios.post(
        "http://159.223.57.121:8090/barang/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Add Data Berhasil");
      getBarang();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Barang
  const handleDelete = async (id) => {
    try {
      const confirmed = window.confirm(
        "Apakah anda ingin menghapus data ini ?"
      );
      if (!confirmed) return;

      const response = await axios.delete(
        `http://159.223.57.121:8090/barang/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(id);
      console.log(response.data);
      alert("Barang berhasil dihapus");

      getBarang();
    } catch (error) {
      console.log(error);
      alert("Barang gagal dihapus");
    }
  };

  const handleUpdateBarang = async (formData, id) => {
    try {
      const response = await axios.put(
        `http://159.223.57.121:8090/barang/update/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      alert("Data berhasil diperbarui");

      // Panggil kembali fungsi getBarang untuk memperbarui data
      getBarang();
    } catch (error) {
      console.log(error);
      alert("Data gagal diperbarui");
    }
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
      <div className="px-36 w-full py-2 bg-white text-sm">
        <table className="table-auto">
          <thead className="bg-gray-300">
            <tr>
              <th className="border px-5 py-2">No</th>
              <th className="border px-10 py-2">Nama Barang</th>
              <th className="border px-3 py-2 text-center">Stock</th>
              <th className="border px-1 py-2">Harga</th>
              <th className="border px-10 py-2">Nama Supplier</th>
              <th className="border px-5 py-2">Aksi</th>
            </tr>
          </thead>
          {isLoading ? (
            <div>Loading....</div>
          ) : (
            <tbody>
              {dataBarang.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td className="border px-5 py-2">{index + 1}</td>
                    <td className="border px-10 py-2">{item.namaBarang}</td>
                    <td className="border px-1 py-2">{item.stok}</td>
                    <td className="border px-3 py-2">{item.harga}</td>
                    <td className="border px-10 py-2">
                      {item.supplier?.namaSupplier}
                    </td>
                    <td className="border px-5">
                      <button
                        onClick={() => {
                          setBarangId(item.barangId);
                          handleOpenEditBarangModal(item.id);
                        }}
                        className="bg-yellow-500 px-1 py-1 m-2 rounded-lg shadow"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 px-1 py-1 rounded-lg shadow"
                      >
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
                className="px-3 py-1 bg-blue-500 rounded-md cursor-pointer text-white"
              >
                1
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="px-3 py-1 bg-gray-200 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white"
              >
                2
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
        onSubmit={handleTambahBarang}
      />
      <EditBarangModal
        isOpen={isEditBarangModalOpen}
        barangId={barangId}
        onClose={handleCloseEditBarangModal}
        onSubmit={handleUpdateBarang}
      />
    </>
  );
};

export default TableBarang;
