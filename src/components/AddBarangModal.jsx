import React, { useState, useEffect } from "react";
import axios from "axios";

const AddBarangModal = ({ isOpen, onClose, onSubmit }) => {
  const [supplierList, setSupplierList] = useState([]);

  const fetchSupplierList = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://159.223.57.121:8090/supplier/find-all?limit=10&offset=1`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const suppliers = response.data.data.map((supplier) => ({
        id: supplier.id,
        namaSupplier: supplier.namaSupplier,
      }));
      console.log(response.data);
      setSupplierList(suppliers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSupplierList();
  }, []);
  const [formData, setFormData] = useState({
    namaBarang: "",
    stok: "",
    harga: "",
    supplier: {
      id: "", // Ubah field "namaSupplier" menjadi "id"
      namaSupplier: "",
    },
  });

  const handleChange = (e) => {
    if (e.target.name === "id") {
      setFormData({
        ...formData,
        supplier: {
          id: e.target.value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleSelectChange = (e) => {
    const selectedSupplier = supplierList.find(
      (supplier) => supplier.id === parseInt(e.target.value)
    );
    setFormData({
      ...formData,
      supplier: {
        id: selectedSupplier.id,
        namaSupplier: selectedSupplier.namaSupplier,
        noTelp: selectedSupplier.noTelp,
        alamat: selectedSupplier.alamat,
      },
    });
    console.log(formData); // Tambahkan console log disini
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(formData);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>

            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
              <div className="bg-gray-200 py-2 px-4">
                <h3 className="text-lg font-bold">Tambah Barang</h3>
              </div>
              <form onSubmit={handleSubmit} className="px-4 py-4">
                <div className="mb-4">
                  <label
                    htmlFor="namaBarang"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Nama Barang
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="namaBarang"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    value={formData.namaBarang}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="stok"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Stock
                  </label>
                  <input
                    type="number"
                    id="stok"
                    name="stok"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    value={formData.stok}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="harga"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Harga
                  </label>
                  <input
                    type="number"
                    id="harga"
                    name="harga"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    value={formData.harga}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="id"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Nama Supplier
                  </label>
                  <select
                    id="id"
                    name="id"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleSelectChange}
                    value={formData.supplier.id}
                  >
                    <option value="">Pilih Supplier</option>
                    {supplierList.map((supplier) => (
                      <option key={supplier.id} value={supplier.id}>
                        {supplier?.namaSupplier} ({supplier?.id})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mr-2"
                    onClick={onClose}
                  >
                    Batal
                  </button>
                  <button type="submit">Simpan</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddBarangModal;
