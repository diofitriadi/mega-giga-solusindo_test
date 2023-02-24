import React, { useState, useEffect } from "react";
import axios from "axios";
import AddSupplierModal from "./AddSupplierModal";
import EditSupplierModal from "./EditSupplierModal";

const TableSupplier = () => {
  const [dataSupplier, setDataSupplier] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isSupplierModalOpen, setIsSupplierModalOpen] = useState(false);

  const token = localStorage.getItem("token");

  const handleSupplierOpenModal = () => {
    setIsSupplierModalOpen(true);
  };

  const handleCloseSupplierModal = () => {
    setIsSupplierModalOpen(false);
  };
  const [isEditSupplierModalOpen, setisEditSupplierModalOpen] = useState(false);
  const [isEditSupplier, setIsEditSupplier] = useState(false);
  const [supplierId, setSupplierId] = useState("");

  const handleOpenEditSupplierModal = (id) => {
    console.log(id);
    setIsEditSupplier(true);
    setSupplierId(id);
    setisEditSupplierModalOpen(true);
  };

  const handleCloseEditSupplierModal = () => {
    setisEditSupplierModalOpen(false);
  };

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
      setTotalPages(Math.ceil(result.data.total_page / 12)); // Assuming 8 items per page
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    getSupplier();
  }, [page]);

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
      getSupplier();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const confirmed = window.confirm(
        "Apakah anda ingin menghapus data ini ?"
      );
      if (!confirmed) return;

      const response = await axios.delete(
        `http://159.223.57.121:8090/supplier/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(id);
      console.log(response.data);
      alert("Supplier berhasil dihapus");

      // Panggil kembali fungsi getSupplier untuk memperbarui data
      getSupplier();
    } catch (error) {
      console.log(error);
      alert("Supplier gagal dihapus");
    }
  };

  const handleUpdateSupplier = async (formData, id) => {
    try {
      const response = await axios.put(
        `http://159.223.57.121:8090/supplier/update/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      alert("Data berhasil diperbarui");

      // Panggil kembali fungsi getSupplier untuk memperbarui data
      getSupplier();
    } catch (error) {
      console.log(error);
      alert("Data gagal diperbarui");
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
      <div className="flex flex-col mx-auto justify-center w-[80%] py-2 bg-white text-sm">
        <table className="table-auto">
          <thead className="bg-gray-300">
            <tr>
              <th className="border px-5 py-2">No</th>
              <th className="border px-5 py-2">Nama Supplier</th>
              <th className="border px-5 py-2">Alamat</th>
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
                    <td className="border px-5 py-2">{item.namaSupplier}</td>
                    <td className="border px-5 py-2">{item.alamat}</td>
                    <td className="border px-5 py-2">{item.noTelp}</td>
                    <td className="border px-5 p-2 flex justify-around">
                      <button
                        className="bg-yellow-500 px-2 py-1  rounded-lg shadow"
                        onClick={() => {
                          setSupplierId(item.supplierId);
                          handleOpenEditSupplierModal(item.id);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 px-2 py-1 rounded-lg shadow"
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
        <div className="flex justify-center ">
          {Array(totalPages)
            .fill()
            .map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  className={`px-3 mx-1 mt-5 py-1 rounded-md ${
                    pageNum === page
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  disabled={pageNum === page}
                  onClick={() => handlePageChange(pageNum)}
                >
                  {pageNum}
                </button>
              );
            })}
        </div>
      </div>
      <AddSupplierModal
        isOpen={isSupplierModalOpen}
        onClose={handleCloseSupplierModal}
        onSubmit={handleTambahSupplier}
      />
      <EditSupplierModal
        isOpen={isEditSupplierModalOpen}
        supplierId={supplierId}
        onClose={handleCloseEditSupplierModal}
        onSubmit={handleUpdateSupplier}
      />
    </>
  );
};

export default TableSupplier;
