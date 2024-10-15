import axios from "axios";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PostNotice = () => {
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePostNotice = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/v1/admin/post-notice",
        { heading, content },
        { withCredentials: true }
      );
      if (response.data.success) {
        navigate("/admin/dashboard");
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div></div>
      <form onSubmit={handlePostNotice}>
        <div className="mb-4">
          <label
            htmlFor="heading"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Give a heading to the notice
          </label>
          <input
            type="text"
            id="heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the notice heading"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Write content of your notice
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full resize-none h-60 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the content of your notice"
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className=" bg-violet-600 text-white py-2 px-4 rounded-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-1">
                <Loader2 className="text-2xl font-bold text-neutral-800 animate-spin" />
                Posting, please wait...
              </span>
            ) : (
              "Post notice"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostNotice;
