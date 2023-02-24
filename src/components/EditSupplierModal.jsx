import React, { useState } from "react";

const EditSupplierModal = ({ isOpen, onClose, onSubmit, supplierId }) => {
  const [formData, setFormData] = useState({
    alamat: "",
    namaSupplier: "",
    noTelp: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = (event) => {
    event.preventDefault();
    onSubmit(formData.id, supplierId);
    onClose();
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
                <h3 className="text-lg font-bold">Edit Supplier</h3>
              </div>
              <form onSubmit={handleEdit} className="px-4 py-4">
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
                    value={formData.namaSupplier}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="alamat"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Stock
                  </label>
                  <input
                    type="text"
                    id="alamat"
                    name="alamat"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    value={formData.alamat}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="noTelp"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    No telp Supplier
                  </label>
                  <input
                    type="number"
                    id="noTelp"
                    name="noTelp"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    value={formData.noTelp}
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

export default EditSupplierModal;
