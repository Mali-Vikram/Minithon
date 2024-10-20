
const alertPage = () => {
  return (
    <>
        <div className="w-full max-w-screen-md mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                    Alerts
                </h1>
            </div>

            <div className="flex justify-between items-center mb-4 border-b pb-2">
                <div className="flex space-x-3">
                    <button className="text-gray-500 hover:text-gray-900">
                        All 
                    </button>
                    <button className="text-gray-500 hover:text-gray-900">
                        Following
                    </button>
                    <button className="text-gray-500 hover:text-gray-900">
                        Archive
                    </button>
                </div>
                <button className="text-blue-500 hover:underline">
                Mark all as read
                </button>
            </div>

            <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
                <div className="flex items-center">
                    <img src="" alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
                    <div>
                        <p className="text-gray-900 font-semibold">
                            Ujjwal Dubey Floods are coming 
                        </p>
                        <p className="text-sm text-gray-500">
                            5 min ago
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
                <div className="flex items-center">
                    <img src="" alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
                    <div>
                        <p className="text-gray-900 font-semibold">
                        Ujjwal Dubey Floods can come 
                        </p>
                        <p className="text-sm text-gray-500">
                            1 hour ago
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </>
  );
};

export default alertPage;
