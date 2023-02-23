import React, { useState } from "react";

const AddSupplierModal = ({ isOpen, onClose, onSubmit }) => {
  // const [formData, setFormData] = useState({
  //   nama: "",
  //   alamat: "",
  //   no_telp: "",
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
                <h3 className="text-lg font-bold">Tambah Barang</h3>
              </div>
              <form
                // onSubmit={handleSubmit}
                className="px-4 py-4"
              >
                <div className="mb-4">
                  <label
                    htmlFor="nama"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Nama Supplier
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    // onChange={handleChange}
                    // value={formData.nama}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="alamat"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Alamat Supplier
                  </label>
                  <input
                    type="text"
                    id="alamat"
                    name="alamat"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    // onChange={handleChange}
                    // value={formData.alamat}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="no_telp"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    No Telp Supplier
                  </label>
                  <input
                    type="text"
                    id="no_telp"
                    name="no_telp"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    // onChange={handleChange}
                    // value={formData.no_telp}
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

export default AddSupplierModal;
