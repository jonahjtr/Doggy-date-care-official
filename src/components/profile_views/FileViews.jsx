import React, { useState, useRef } from "react";
import useDeleteAxios from "../../hooks/useDeleteAxios";
import CreateModal from "../modals/CreateModal";
import FileUpload from "../forms/FileUpload";
import useClickOutside from "../../hooks/clickOutside";

const FileViews = ({ fileList, dogId }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const componentRef = useRef(null);

  const handleSetDelete = (index) => {
    setSelectedFile(index);
    setConfirmDelete(true);
  };

  const handleDelete = async (file_name) => {
    try {
      const result = await useDeleteAxios(`/dogs/files/${file_name}`);
      if (result) window.location.reload();
    } catch (error) {
      console.error("Delete failed", error.message);
    }
  };
  useClickOutside(componentRef, () => {
    setConfirmDelete(false);
  });
  const isFileListValid = Array.isArray(fileList) && fileList.length > 0;

  return (
    <section className="w-full bg-darkGreen h-[250px] lg:h-[350px] 2xl:h-[400px] max-w-[1000px] mx-auto p-2 px-4 rounded-3xl mt-0 my-5 flex flex-col justify-evenly items-center border">
      {" "}
      <CreateModal
        url={`files/${dogId}`}
        title="Files"
        component={<FileUpload />}
      />
      <div className="h-full w-full h-4/5 mb-3 rounded-2xl no-scrollbar bg-lightBeige overflow-y-scroll">
        {!isFileListValid ? (
          <div className="flex justify-center items-center h-full">
            no files to display
          </div>
        ) : (
          fileList.map((file, index) => {
            let isEven = false;
            if (index % 2 === 0) isEven = true;
            return (
              <div
                ref={componentRef}
                key={index}
                target="_blank"
                className={
                  isEven
                    ? "w-full flex items-center justify-between"
                    : "bg-darkBeige w-full flex items-center justify-between"
                }
              >
                <a
                  target="_blank"
                  href={file.file_url}
                  className="pl-2 flex w-[70%] items-center justify-between"
                >
                  <div className="truncate flex  items-center w-[70%]">
                    {file.file_nickname}
                  </div>
                  <div>{file.upload_date}</div>{" "}
                </a>
                <div>
                  {confirmDelete && selectedFile === index ? (
                    <button
                      className=""
                      onClick={() => handleDelete(file.file_name)}
                    >
                      are you sure?
                    </button>
                  ) : (
                    <button
                      className="px-3 py-1.5 "
                      onClick={() => handleSetDelete(index)}
                    >
                      <svg
                        className="w-[17px] h-[17px] text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 20"
                      >
                        <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default FileViews;
