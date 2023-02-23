import React, { useState } from "react";

const EditBarangModal = ({ isOpen, onClose, onSubmit }) => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   stock: "",
  //   price: "",
  //   supplierName: "",
  //   supplierAddress: "",
  //   supplierPhone: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit(formData);
  //   onClose();
  // };

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
                <h3 className="text-lg font-bold">Edit Barang</h3>
              </div>
              <form
                // onSubmit={handleSubmit}
                className="px-4 py-4"
              >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Nama Barang
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    // onChange={handleChange}
                    // value={formData.name}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="stock"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Stock
                  </label>
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    // onChange={handleChange}
                    // value={formData.stock}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="price"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Harga
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    // onChange={handleChange}
                    // value={formData.price}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="supplierName"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Nama Supplier
                  </label>
                  <input
                    type="text"
                    id="supplierName"
                    name="supplierName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    // onChange={handleChange}
                    // value={formData.supplierName}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="supplierAddress"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Alamat Supplier
                  </label>
                  <input
                    type="text"
                    id="supplierAddress"
                    name="supplierAddress"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    // onChange={handleChange}
                    // value={formData.supplierAddress}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="supplierPhone"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    No Telp Supplier
                  </label>
                  <input
                    type="text"
                    id="supplierPhone"
                    name="supplierPhone"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    // onChange={handleChange}
                    // value={formData.supplierPhone}
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
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-300 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-blue-300"
                  >
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditBarangModal;
