import React, { useState } from "react";
import useDeleteAxios from "../../hooks/useDeleteAxios";

const FileViews = (props) => {
  const fileList = props.fileList;
  if (!fileList || fileList.length < 1) return <div>no files to diplay</div>;

  const handleDelete = async (file_name) => {
    try {
      const result = await useDeleteAxios(`/dogs/files/${file_name}`);
      if (result) window.location.reload();
      console.log("Delete successful", result);
    } catch (error) {
      console.error("Delete failed", error.message);
    }
  };

  return (
    <div className="h-full bg-lightBeige overflow-y-scroll">
      {fileList.map((file, index) => {
        let isEven = false;
        if (index % 2 == 0) isEven = true;
        return (
          <div
            key={index}
            target="_blank"
            className={
              isEven
                ? "  w-full flex items-center justify-between"
                : "bg-darkBeige  w-full flex items-center justify-between"
            }
          >
            <a
              target="_blank"
              href={file.file_url}
              className="flex w-[70%] items-center justify-between"
            >
              <div className="truncate flex  items-center w-[70%]">
                <svg
                  class="w-[17px] h-[17px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 1v4a1 1 0 0 1-1 1H1m14-4v16a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2Z"
                  />
                </svg>
                {file.file_nickname}
              </div>
              <div>{file.upload_date}</div>{" "}
            </a>
            <div>
              <button
                className="px-3 py-1.5 "
                onClick={() => handleDelete(file.file_name)}
              >
                <svg
                  class="w-[17px] h-[17px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FileViews;

// <embed
//   src={file.file_url}
//   width="50px"
//   height="50px"
//   type="application/pdf"
//   className="border "
// />;
