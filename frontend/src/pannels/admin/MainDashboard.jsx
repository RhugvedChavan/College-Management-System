import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { formatDateTime } from "../../helpers/globalHelper";
import { Loader2 } from "lucide-react";

const MainDashboard = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deletingNoticeId, setDeletingNoticeId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdminNotices = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          "http://localhost:3000/api/v1/admin/admin-posted-notices",
          { withCredentials: true }
        );
        if (response.data.success) {
          setNotices(response.data.notice);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAdminNotices();
  }, []);

  const handleDelete = async (noticeId) => {
    try {
      setDeletingNoticeId(noticeId);
      const response = await axios.delete(
        `http://localhost:3000/api/v1/admin/delete-admin-notice/${noticeId}`,
        { withCredentials: true }
      );
      if (response.data.success) {
        setNotices((prevNotices) =>
          prevNotices.filter((notice) => notice._id !== noticeId)
        );
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setDeletingNoticeId(null);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="p-4 border border-neutral-400">
          <h1 className="text-lg font-bold text-neutral-700">Your posted notices</h1>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {notices.length === 0 ? (
            <div className="flex items-center justify-center">
              <h1 className="text-2xl font-bold text-neutral-700 mt-6">You have no notices. Post one!</h1>
            </div>
          ) : (
            <div className="border border-green-400 rounded-lg p-4 mt-7 bg-green-300/30">
              {notices.map((notice) => (
                <div key={notice._id}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-lg text-neutral-800 font-bold pb-1">{notice.heading}</h1>
                    </div>
                    <div>
                      <button
                        type="submit"
                        disabled={deletingNoticeId === notice._id} 
                        onClick={() => handleDelete(notice._id)}
                        className="px-3 py-1 border border-red-500 rounded-lg text-neutral-800 font-medium bg-red-200 hover:bg-red-100"
                      >
                        {deletingNoticeId === notice._id ? (
                          <span className="flex items-center justify-center gap-1">
                            <Loader2 className="text-xl font-bold text-red-600 animate-spin" />
                            Deleting...
                          </span>
                        ) : (
                          "delete"
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-sm font-semibold text-neutral-700">{notice.content}</h1>
                  </div>
                  <div>
                    <p className="text-sm font-medium pt-2">{formatDateTime(notice.createdAt)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
