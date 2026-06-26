'use client';
import React, { useState } from 'react';
import { ShoppingCart, X, Trash2, MapPin, User, Phone, ClipboardList, Plus, Minus } from 'lucide-react';

export default function CatalogoPage() {
  // 1. Catálogo oficial de productos con precios reales en COP
  const productos = [
    {
      id: "airpods-pro",
      name: 'AirPods 2da Generación',
      badge: 'CANCELACIÓN DE RUIDO',
      image: '/assets/airpods_2.1.png',
      features: 'Diseño clásico y conexión instantánea. Hasta 5 horas de música continua con una sola carga.',
      price: 70000
    },
    {
      id: "airpods-3",
      name: 'AirPods 3ra Generación',
      badge: 'AUDIO ESPACIAL',
      image: '/assets/airpods_3.png',
      features: 'Audio espacial personalizado con seguimiento de la cabeza y resistencia al agua/sudor.',
      price: 85000
    },
    {
      id: "cargador-20w",
      name: 'Cargador Carga Rápida 20W',
      badge: 'CARGA EXPRESS',
      image: '/assets/cargador.png',
      features: 'Adaptador de corriente USB-C de 20W ideal para proteger la vida útil de tus AirPods y iPhone con carga eficiente.',
      price: 49000
    }
  ];

  // 2. Estados de control
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    ciudad: '',
    direccion: '',
    indicaciones: '',
    metodoPago: 'Contraentrega'
  });

  // 3. Funciones de lógica de la Tienda (Agregar, Sumar, Restar y Eliminar)
  const agregarAlCarrito = (producto) => {
    setCart((prevCart) => {
      const existe = prevCart.find(item => item.id === producto.id);
      if (existe) {
        return prevCart.map(item => 
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prevCart, { ...producto, cantidad: 1 }];
    });
    setIsCartOpen(true);
  };

  const modificarCantidad = (id, incremento) => {
    setCart((prevCart) => 
      prevCart.map(item => {
        if (item.id === id) {
          const nuevaCantidad = item.cantidad + incremento;
          // Si la cantidad baja de 1, mantenemos 1 (o puedes usar eliminarDelCarrito si prefieres)
          return { ...item, cantidad: nuevaCantidad < 1 ? 1 : nuevaCantidad };
        }
        return item;
      })
    );
  };

  const eliminarDelCarrito = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Calcular el total de la compra
  const totalPagar = cart.reduce((acc, item) => acc + (item.price * item.cantidad), 0);

  // 4. Envío estructurado a WhatsApp
  const enviarPedidoWhatsApp = (e) => {
    e.preventDefault();
    if (cart.length === 0) return alert("Tu carrito está vacío");

    let mensaje = `🛍️ *NUEVO PEDIDO - CAFiiTECH*\n\n`;
    mensaje += `👤 *Datos del Cliente:*\n`;
    mensaje += `• *Nombre:* ${formData.nombre}\n`;
    mensaje += `• *Celular:* ${formData.telefono}\n`;
    mensaje += `• *Ciudad:* ${formData.ciudad}\n`;
    mensaje += `• *Dirección:* ${formData.direccion}\n`;
    if (formData.indicaciones) mensaje += `• *Notas:* ${formData.indicaciones}\n`;
    mensaje += `• *Método de Pago:* ${formData.metodoPago}\n\n`;

    mensaje += `📦 *Productos Ordenados:*\n`;
    cart.forEach(item => {
      mensaje += `• ${item.name} (x${item.cantidad}) - $${(item.price * item.cantidad).toLocaleString('es-CO')}\n`;
    });

    mensaje += `\n💰 *TOTAL A PAGAR:* $${totalPagar.toLocaleString('es-CO')}\n\n`;
    mensaje += `⚡ _Pedido enviado desde el catálogo web. Despachos desde Cúcuta._`;

    const numeroWhatsApp = "573052311490"; 
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-transparent text-white pb-24 pt-12 relative overflow-x-hidden">
      
      {/* BOTÓN FLOTANTE GLOBAL DEL CARRITO */}
      {cart.length > 0 && (
        <button 
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-violet-600 text-white p-4 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.6)] hover:bg-violet-500 transition-all transform hover:scale-110 flex items-center justify-center"
        >
          <ShoppingCart className="size-6" />
          <span className="absolute -top-1 -right-1 bg-white text-black font-black text-xs size-5 rounded-full flex items-center justify-center shadow-md">
            {cart.reduce((sum, item) => sum + item.cantidad, 0)}
          </span>
        </button>
      )}

      {/* ENCABEZADO */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-16">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
          Nuestro <span className="text-violet-500">Catálogo</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base font-medium max-w-xl mx-auto">
          Selecciona tus audífonos favoritos, revisa sus specs y arma tu pedido al instante.
        </p>
      </div>

      {/* GRILLA DE PRODUCTOS */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productos.map((prod) => (
          <div 
            key={prod.id} 
            className="w-full bg-neutral-900/50 rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between group hover:border-violet-500/30 transition-all duration-300"
          >
            <div>
              {/* CONTENEDOR DE IMAGEN */}
              <div className="relative w-full aspect-square bg-neutral-950 flex items-center justify-center overflow-hidden border-b border-white/5">
                <span className="absolute top-3 left-3 z-10 bg-violet-600/80 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded">
                  {prod.badge}
                </span>
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* INFORMACIÓN DEL PRODUCTO */}
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-black text-white tracking-tight">{prod.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">{prod.features}</p>
              </div>
            </div>

            {/* PRECIO Y ACCIÓN DEL CARRITO */}
            <div className="p-5 pt-0 flex items-center justify-between mt-4">
              <div>
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider block">Precio</span>
                <span className="text-base font-black text-white tracking-tight">
                  {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(prod.price)}
                </span>
              </div>

              <button 
                onClick={() => agregarAlCarrito(prod)}
                className="p-3 bg-white text-black hover:bg-violet-600 hover:text-white rounded-full transition-colors duration-300 shadow-md shrink-0 flex items-center justify-center"
              >
                <ShoppingCart className="size-3.5" /> 
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* PANEL LATERAL DERECHO (CARRITO) */}
      <div className={`fixed inset-0 z-50 transition-all duration-300 ${isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
        
        <div className={`absolute top-0 right-0 h-full w-full max-w-md bg-neutral-950 border-l border-white/10 p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          <div className="flex items-center justify-between pb-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <ShoppingCart className="size-5 text-violet-500" />
              <h2 className="text-lg font-black uppercase tracking-tight">Tu Carrito</h2>
            </div>
            <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X className="size-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto my-4 space-y-6 pr-1 custom-scrollbar">
            {/* LISTA DE ARTÍCULOS EN EL CARRITO CON SELECTOR DE CANTIDAD */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase text-gray-400 tracking-wider flex items-center gap-1.5">
                <ClipboardList className="size-3.5 text-violet-400" /> Resumen de Productos
              </h3>
              {cart.length === 0 ? (
                <p className="text-gray-500 text-sm py-4 text-center font-medium">No has añadido productos aún.</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-neutral-900/60 border border-white/5 rounded-xl p-3 gap-3">
                    <img src={item.image} alt={item.name} className="size-12 rounded-lg object-cover bg-neutral-950 border border-white/5 shrink-0" />
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                      <p className="text-xs text-violet-400 font-bold mt-0.5">
                        {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(item.price * item.cantidad)}
                      </p>
                    </div>

                    {/* CONTROLES INTERACTIVOS DE UNIDADES (+ / -) */}
                    <div className="flex items-center bg-neutral-950 border border-white/10 rounded-lg p-1 gap-2 shrink-0">
                      <button 
                        type="button"
                        onClick={() => modificarCantidad(item.id, -1)}
                        className="text-gray-400 hover:text-white size-5 flex items-center justify-center transition-colors"
                      >
                        <Minus className="size-3" />
                      </button>
                      <span className="text-xs font-black text-white w-4 text-center">
                        {item.cantidad}
                      </span>
                      <button 
                        type="button"
                        onClick={() => modificarCantidad(item.id, 1)}
                        className="text-gray-400 hover:text-white size-5 flex items-center justify-center transition-colors"
                      >
                        <Plus className="size-3" />
                      </button>
                    </div>

                    <button onClick={() => eliminarDelCarrito(item.id)} className="text-gray-500 hover:text-rose-500 transition-colors p-1.5 shrink-0">
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* FORMULARIO DE DATOS DE ENVÍO */}
            {cart.length > 0 && (
              <form id="form-pedido" onSubmit={enviarPedidoWhatsApp} className="space-y-4 pt-4 border-t border-white/5">
                <h3 className="text-xs font-bold uppercase text-gray-400 tracking-wider flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-fuchsia-400" /> Información de Envío
                </h3>
                
                <div className="space-y-3">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500" />
                    <input required type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} placeholder="Nombre y Apellido completo" className="w-full bg-neutral-900 border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 font-medium" />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500" />
                    <input required type="tel" name="telefono" value={formData.telefono} onChange={handleInputChange} placeholder="Número de Celular / WhatsApp" className="w-full bg-neutral-900 border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 font-medium" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <input required type="text" name="ciudad" value={formData.ciudad} onChange={handleInputChange} placeholder="Ciudad (Ej: Cúcuta)" className="w-full bg-neutral-900 border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 font-medium" />
                    <input required type="text" name="direccion" value={formData.direccion} onChange={handleInputChange} placeholder="Dirección de Entrega" className="w-full bg-neutral-900 border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 font-medium" />
                  </div>

                  <input type="text" name="indicaciones" value={formData.indicaciones} onChange={handleInputChange} placeholder="Indicaciones opcionales (Casa, Apto, etc.)" className="w-full bg-neutral-900 border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 font-medium" />
                  
                  <div>
                    <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1.5 pl-1">Método de Pago Preferido</label>
                    <select name="metodoPago" value={formData.metodoPago} onChange={handleInputChange} className="w-full bg-neutral-900 border border-white/5 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-violet-500 font-bold">
                      <option value="Contraentrega">Pago Contraentrega (Efectivo al recibir)</option>
                      <option value="Transferencia Nequi/Bancolombia">Transferencia Bancaria (Nequi / Bancolombia / Bre-B)</option>
                    </select>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* PIE DEL PANEL */}
          {cart.length > 0 && (
            <div className="pt-4 border-t border-white/5 space-y-3">
              <div className="flex items-center justify-between text-base font-black">
                <span className="text-gray-400 text-sm">Total del Pedido:</span>
                <span className="text-xl text-white">
                  {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(totalPagar)}
                </span>
              </div>
              <button 
                type="submit" 
                form="form-pedido"
                className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all hover:opacity-90 flex items-center justify-center gap-2 shadow-lg"
              >
                Confirmar Pedido por WhatsApp
              </button>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}