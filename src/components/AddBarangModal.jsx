import React, { useState } from "react";

const AddBarangModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    namaBarang: "",
    stok: "",
    harga: "",
    supplier: {
      namaSupplier: "",
    },
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.namaBarang]: e.target.value,
      [e.target.stok]: e.target.value,
      [e.target.harga]: e.target.value,
      [e.target.supplier.namaSupplier]: e.target.value,
    });
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
              <form onSubmit={onSubmit} className="px-4 py-4">
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
                    // value={formData.namaBarang}
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
                    // value={formData.stok}
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
                    // value={formData.harga}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="namaSupplier"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Nama Supplier
                  </label>
                  <input
                    type="text"
                    id="namaSupplier"
                    name="namaSupplier"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    // value={formData.supplier.namaSupplier}
                  />
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
