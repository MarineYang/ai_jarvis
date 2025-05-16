import React from "react";

interface LoginScreenProps {
    onLoginSuccess: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess}) => {
    const handleLogin = async () => {

        //IPC 통신
        const result = await window.electronAPI.loginSuccess();
        if (result === true) {
            onLoginSuccess();
            console.log("IPC 결과:", result);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg" onClick={handleLogin}>
                로그인(임시)
            </button>
        </div>
    )
}
