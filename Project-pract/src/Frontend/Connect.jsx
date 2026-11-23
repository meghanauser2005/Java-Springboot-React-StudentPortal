import React, { useState, useEffect } from "react";
import axios from "axios";

const Connect = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const apiurl = "http://localhost:8080/students";

  const datahandler = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(apiurl);
      console.log(response.data);
      setUser(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      console.log(err.message);
      setError(err.message || "Failed to fetch students");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!id) {
      alert("Cannot delete: Student ID is missing.");
      return;
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student record?"
    );
    if (!confirmDelete) return;

    try {
      setDeletingId(id);
      await axios.delete(`${apiurl}/${id}`);

      // Remove the deleted student from UI state immediately
      setUser((prevUsers) =>
        prevUsers.filter((record) => (record.id ?? record._id) !== id)
      );
    } catch (err) {
      console.error("Delete failed:", err);
      alert(err.response?.data?.message || "Failed to delete student");
    } finally {
      setDeletingId(null);
    }
  };

  useEffect(() => {
    datahandler();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              Connected to Backend
            </div>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              Students Directory
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Fetching records from{" "}
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-700">
                {apiurl}
              </code>
            </p>
          </div>

          <button
            type="button"
            onClick={datahandler}
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
          >
            Refresh
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-24 animate-pulse rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="h-4 w-1/2 rounded bg-slate-200"></div>
                <div className="mt-3 h-3 w-1/3 rounded bg-slate-100"></div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            <p className="font-semibold">Connection Error</p>
            <p className="mt-1">{error}</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && user.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
            No student records found.
          </div>
        )}

        {/* Students List */}
        {!loading && !error && user.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {user.map((record, index) => {
              const recordId = record.id ?? record._id;
              const isDeleting = deletingId === recordId;

              return (
                <div
                  key={recordId ?? index}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                      {record.username
                        ? record.username.charAt(0).toUpperCase()
                        : "?"}
                    </div>
                    <h2 className="truncate text-base font-semibold text-slate-800 group-hover:text-indigo-600">
                      {record.username}
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDelete(recordId)}
                    disabled={isDeleting}
                    className="shrink-0 rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isDeleting ? "Deleting..." : "Delete"}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Connect;