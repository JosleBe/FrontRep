import React, { useState } from "react";
import axios from "axios";
import miLogo from "../../assets/img/logo-pro-help.png";
import campania from "../../assets/img/voluntarios.jpg";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const response = await axios.post("http://localhost:8080/api/auth/login", formData);
            console.log("Respuesta del servidor:", response.data);
            alert("Inicio de sesión exitoso");
        } catch (err) {
            console.error("Error al iniciar sesión:", err);
            setError("Credenciales incorrectas o error en el servidor.");
        }
    };

    return (
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "#896447" }}>
            <div className="row w-100">

                <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center text-white position-relative"
                    style={{
                        backgroundColor: "white",
                        borderTopLeftRadius: "300px",
                        borderTopRightRadius: "50px",
                        clipPath: "path('M 0 0 Q 100% 0, 50% 50% T 0 100% L 0 0')",
                        height: "98vh",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <div className="text-center position-relative z-2">
                        <img src={miLogo} alt="Logo" className="img-fluid" style={{ maxHeight: "200px", marginRight: "250px" }} />
                        <img src={campania} alt="Campaña" className="img-fluid" style={{ maxWidth: "90%" }} />
                    </div>
                </div>

                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div className="card p-4 shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
                        <h1 className="text-center" style={{ fontWeight: "bold" }}>Iniciar sesión</h1>
                        <p className="text-center" style={{ fontWeight: "normal" }}>Conectamos a personas generosas con quienes más lo necesitan.</p>
                        {error && <p className="alert alert-danger text-center">{error}</p>}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Correo o teléfono</label>
                                <input type="text" name="email" className="form-control" required value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Contraseña</label>
                                <div className="input-group">
                                    <input type={showPassword ? "text" : "password"} name="password" className="form-control" required value={formData.password} onChange={handleChange} />
                                    <button type="button" className="btn btn-outline-secondary" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? "🙈" : "👁"}
                                    </button>
                                </div>
                            </div>
                            <div className="mb-3 text-end">
                                <a href="#" className="text-muted">¿Olvidaste tu contraseña?</a>
                            </div>
                            <button type="submit" className="btn w-100"
                                style={{ backgroundColor: "#896447", borderColor: "#896447", color: "white" }}>Ingresar</button>
                            <div className="text-center my-2">o</div>
                            <button type="button" className="btn w-100"
                                style={{ backgroundColor: "#E0E2CB", borderColor: "#E0E2CB", }}>Registrarse</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
