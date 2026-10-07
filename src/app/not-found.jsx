import Link from "next/link";

const NotFound = () => {
    return (
 <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="text-center max-w-xl">

                {/* 404 */}
                <div className="text-[120px] md:text-[180px] font-extrabold text-blue-600 leading-none">
                    404
                </div>

                {/* Illustration */}
                <div className="text-7xl -mt-10 mb-6">
                    🐱
                </div>

                <h1 className="text-4xl font-bold text-slate-900">
                    Page Not Found
                </h1>

                <p className="text-slate-500 text-lg mt-4 mb-8">
                    The page you are looking for does not exist
                    or has been moved.
                </p>

                <Link
                    href="/"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                    🏠 Go Home
                </Link>

            </div>
        </div>



    );
};

export default NotFound;