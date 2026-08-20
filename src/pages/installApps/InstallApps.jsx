import React, { useContext } from 'react';
import { InstallAppsContext } from '../../context/InstallAppsContext';
import { toast } from 'react-toastify';

const InstallApps = () => {
    const handleUninstall = (app) => {
        const restApps = installedApps.filter((iApp) => iApp.id != app.id);
        setInstalledApps(restApps);
        toast.warning(`${app.title} is uninstalled!`);
    }
    const { installedApps, setInstalledApps } = useContext(InstallAppsContext);
    return (
        <div className="container mx-auto my-10">
            {installedApps.length === 0 ? (
                <h2 className="font-bold text-4xl text-center my-5">
                    No installed apps found!
                </h2>
            ) : (
                installedApps.map((app, ind) => {
                    return (
                        <div
                            key={ind}
                            className="flex gap-4 items-center justify-between shadow p-4 rounded-md bg-gray-600 mb-4"
                        >
                            <div>
                                <img src={app.image} className="h-[120px] w-auto" alt="" />
                                <h2 className="font-semibold text-2xl">{app.title}</h2>
                            </div>
                            <button
                                className="btn btn-accent "
                                onClick={() => handleUninstall(app)}
                            >
                                Uninstall
                            </button>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default InstallApps;