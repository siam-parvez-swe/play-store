import React from "react";
import { Link } from "react-router";
import Navbar from "../../components/shared/Navbar";

const NotFoundPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen flex items-center justify-center bg-base-200">
                <div className="text-center max-w-lg">
                    {/* 404 */}
                    <h1 className="text-8xl md:text-9xl font-extrabold text-primary">
                        404
                    </h1>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold mt-4">
                        Page Not Found
                    </h2>

                    {/* Description */}
                    <p className="text-base-content/60 mt-4 text-lg">
                        Sorry, the page you're looking for doesn't exist or may have been
                        moved.
                    </p>

                    {/* Button */}
                    <Link
                        to="/"
                        className="btn btn-primary mt-8 px-8"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default NotFoundPage;