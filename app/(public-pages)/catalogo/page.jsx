'use client';
import React, { useState } from 'react';
import { ShoppingCart, X, MessageCircle, Trash2, Plus, Minus, User, MapPin, Phone, Mail, CreditCard } from 'lucide-react';

export default function CatalogoPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // --- ESTADO PARA LA INFORMACIÓN DEL CLIENTE ACTUALIZADO ---
  const [clienteInfo, setClienteInfo] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    ciudad: '',
    direccion: '',
    metodoPago: '' // Nuevo campo
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClienteInfo(prev => ({ ...prev, [name]: value }));
  };

  const productos = [
    {
      id: 1,
      name: "AirPods 2da Generación",
      tag: "Más Vendido",
      price: 149900,
      description: "Excelente fidelidad de audio, estuche de carga lightning y autonomía de hasta 5 horas.",
      image: "/icon.png" 
    },
    {
      id: 2,
      name: "AirPods 3ra Generación",
      tag: "Audio Espacial",
      price: 189900,
      description: "Diseño renovado con ecualización adaptativa, resistencia al agua y sensores de fuerza.",
      image: "/icon.png"
    },
    {
      id: 3,
      name: "AirPods Pro 2da Generación",
      tag: "Cancelación de Ruido",
      price: 249900,
      description: "Cancelación activa de ruido Pro, modo ambiente adaptativo y chip H2 de última tecnología.",
      image: "/icon.png"
    }
  ];

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, change) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const totalNeto = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // --- COMPROBACIÓN DE FORMULARIO COMPLETO (TODOS LOS CAMPOS OBLIGATORIOS) ---
  const formularioCompleto = 
    clienteInfo.nombre.trim() && 
    clienteInfo.telefono.trim() && 
    clienteInfo.correo.trim() && 
    clienteInfo.ciudad.trim() && 
    clienteInfo.direccion.trim() &&
    clienteInfo.metodoPago !== '';

  // --- ARMAR EL MENSAJE PERFECTO PARA WHATSAPP ---
  const obtenerMensajeWhatsApp = () => {
    const saludo = `¡Hola CAFiiTECH! 👋 Quiero confirmar el siguiente pedido:\n\n`;
    
    // Lista de productos
    const listaProductos = cartItems.map(item => `• ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toLocaleString('es-CO')}`).join('\n');
    
    const total = `\n\n💰 *Total Neto:* $${totalNeto.toLocaleString('es-CO')}`;
    
    // Datos del cliente estructurados con Correo y Forma de Pago
    const datosEnvio = `\n\n📌 *DATOS DE ENVÍO:*\n👤 *Nombre:* ${clienteInfo.nombre}\n📞 *Teléfono:* ${clienteInfo.telefono}\n✉️ *Correo:* ${clienteInfo.correo}\n🏙️ *Ciudad/Dpto:* ${clienteInfo.ciudad}\n🏠 *Dirección:* ${clienteInfo.direccion}\n💳 *Forma de Pago:* ${clienteInfo.metodoPago}`;
    
    return encodeURIComponent(saludo + listaProductos + total + datosEnvio);
  };

  return (
    <div className="relative min-h-screen bg-transparent w-full text-white pb-24">
      
      {/* HEADER */}
      <div className="py-16 px-6 max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
          Nuestro <span className="text-violet-500">Catálogo</span>
        </h1>
        <p className="text-gray-400 max-w-md mx-auto text-sm md:text-base font-medium">
          Selecciona tus audífonos favoritos. Al agregarlos se abrirá tu resumen de pedido de inmediato.
        </p>
      </div>

      {/* PRODUCTOS */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {productos.map((producto) => (
          <div key={producto.id} className="border border-white/5 rounded-3xl bg-white/[0.01] backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300 hover:border-violet-500/20 hover:scale-[1.01] group">
            <div>
              <div className="w-full aspect-square bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-center p-8 mb-6 relative overflow-hidden">
                <img src={producto.image} alt={producto.name} className="w-4/5 h-4/5 object-contain transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute top-3 left-3 bg-violet-600/20 border border-violet-500/30 text-violet-400 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full">
                  {producto.tag}
                </span>
              </div>
              <h3 className="text-xl font-black tracking-tight mb-2">{producto.name}</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 font-medium">{producto.description}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between gap-4">
              <div>
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider block">Precio</span>
                <span className="text-xl font-black text-white">${producto.price.toLocaleString('es-CO')}</span>
              </div>
              <button onClick={() => addToCart(producto)} className="bg-white text-black font-bold text-xs px-5 py-3 rounded-xl transition-all hover:bg-violet-600 hover:text-white shadow-lg">
                Agregar al Pedido
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* BOTÓN FLOTANTE */}
      <button onClick={() => setIsCartOpen(true)} className="fixed bottom-6 right-6 z-40 bg-white text-black p-4 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 flex items-center gap-2">
        <div className="relative">
          <ShoppingCart className="size-6" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-violet-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </div>
      </button>

      {/* OVERLAY */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsCartOpen(false)} />

      {/* PANEL DEL CARRITO */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[480px] bg-black border-l border-white/5 shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-in-out transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Encabezado */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="size-5 text-violet-500" />
            <h3 className="text-xl font-black text-white tracking-tight">Tu Pedido</h3>
          </div>
          <button onClick={() => setIsCartOpen(false)} className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white"><X className="size-5" /></button>
        </div>

        {/* CONTENIDO SCROLLABLE */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* SECCIÓN 1: PRODUCTOS */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">1. Artículos Seleccionados</h4>
            {cartItems.length === 0 ? (
              <div className="text-center py-8 bg-white/[0.01] border border-dashed border-white/10 rounded-2xl">
                <p className="text-gray-400 text-sm">El carrito está vacío</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                  <div className="size-12 bg-white/5 rounded-lg flex items-center justify-center p-2">
                    <img src={item.image} alt={item.name} className="size-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-xs">{item.name}</h4>
                    <p className="text-violet-400 font-bold text-xs mt-0.5">${(item.price * item.quantity).toLocaleString('es-CO')}</p>
                    <div className="flex items-center gap-1.5 mt-2 bg-white/5 w-fit rounded-md p-0.5">
                      <button onClick={() => updateQuantity(item.id, -1)} className="p-1 text-gray-400 hover:text-white"><Minus className="size-2.5" /></button>
                      <span className="text-white text-xs font-bold px-1">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="p-1 text-gray-400 hover:text-white"><Plus className="size-2.5" /></button>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-gray-500 hover:text-red-400 p-2"><Trash2 className="size-4" /></button>
                </div>
              ))
            )}
          </div>

          {/* SECCIÓN 2: FORMULARIO DE INFORMACIÓN COMPLETO */}
          {cartItems.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">2. Datos de Envío y Pago</h4>
              
              <div className="space-y-3">
                {/* Nombre */}
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500" />
                  <input 
                    type="text" name="nombre" value={clienteInfo.nombre} onChange={handleInputChange}
                    placeholder="Nombre y Apellido completo"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
                {/* Teléfono */}
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500" />
                  <input 
                    type="tel" name="telefono" value={clienteInfo.telefono} onChange={handleInputChange}
                    placeholder="Número de Celular"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
                {/* Correo Electrónico (NUEVO) */}
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500" />
                  <input 
                    type="email" name="correo" value={clienteInfo.correo} onChange={handleInputChange}
                    placeholder="Correo Electrónico"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
                {/* Ciudad */}
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500" />
                  <input 
                    type="text" name="ciudad" value={clienteInfo.ciudad} onChange={handleInputChange}
                    placeholder="Ciudad y Departamento"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
                {/* Dirección */}
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500" />
                  <input 
                    type="text" name="direccion" value={clienteInfo.direccion} onChange={handleInputChange}
                    placeholder="Dirección exacta (Barrio, Calle, Casa, etc.)"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
                {/* Método de Pago Dropdown (NUEVO) */}
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500 pointer-events-none" />
                  <select 
                    name="metodoPago" value={clienteInfo.metodoPago} onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-black text-gray-500">Selecciona cómo deseas pagar</option>
                    <option value="Transferencia Bancaria (Bancolombia/Nequi)" className="bg-black text-white">Transferencia Bancaria (Bancolombia/Nequi)</option>
                    <option value="Pago Contraentrega" className="bg-black text-white">Pago Contraentrega (Pagas al recibir)</option>
                    <option value="Link de Pago (Tarjetas)" className="bg-black text-white">Link de Pago (Tarjetas de Crédito)</option>
                  </select>
                  {/* Flechita decorativa del select */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs">▼</div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* FOOTER */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-white/5 bg-neutral-950">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 font-medium text-sm">Total Neto:</span>
              <span className="text-xl font-black text-white">${totalNeto.toLocaleString('es-CO')}</span>
            </div>

            {!formularioCompleto && (
              <p className="text-amber-400/80 text-[11px] text-center mb-3 font-medium">
                ⚠️ Por favor completa todos los datos y el método de pago para ordenar.
              </p>
            )}

            <a
              href={formularioCompleto ? `https://wa.me/573000000000?text=${obtenerMensajeWhatsApp()}` : '#'}
              target={formularioCompleto ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={`w-full flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl transition-all duration-300 shadow-xl text-sm ${
                formularioCompleto 
                  ? 'bg-white text-black hover:bg-emerald-500 hover:text-white cursor-pointer' 
                  : 'bg-white/10 text-gray-500 cursor-not-allowed pointer-events-none'
              }`}
            >
              <MessageCircle className="size-4" />
              <span>Confirmar Pedido Completo</span>
            </a>
          </div>
        )}
      </div>

    </div>
  );
}