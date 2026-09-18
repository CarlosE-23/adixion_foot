# ============================================
# PLAN COMPLETO - SITIO WEB ADIXION FOOD
# ============================================

# ============================================
# IDEA PRINCIPAL
# ============================================

El restaurante de comida rápida se llama "Adixion Food". Como se puede ver en el logo principal (Image 1), el negocio tiene una identidad visual elegante con el nombre "ADIXION" en letras grandes y "Food" en letras más pequeñas debajo, con la particularidad de que la letra "X" está en color magenta/rosa, lo cual define toda la paleta de colores del sitio.

En el directorio public/references se encuentran las referencias visuales que servirán como base para crear el sitio web, junto con la información del negocio proporcionada en el archivo content.md (dirección, teléfono, horario).

Adixion Food es una extensión de un negocio principal que es una repostería de postres. Por esta razón, la identidad visual del restaurante se basa en colores pasteles, donde el rosa/magenta es el color predominante. Esta temática pastel será la que se mantenga a lo largo de todo el sitio web, reflejando la herencia del negocio de repostería.

Aunque el logo principal (Image 1) es uno, para el menú y el sitio web se utiliza una variante llamada "logo_2" (almacenada en public/references/logo_2.png). La página web estará basada en torno a este logo_2 como elemento identitario principal.

Para la estructura y distribución del sitio, se tomará como referencia principal el sitio web de Arturos (www.arturos.com.ve), el cual se muestra en la Image 4 y todas las imágenes de referencia (reference_3_1.png hasta reference_3_11.png). Este sitio de referencia contiene la distribución completa del home principal, que incluye: navbar con logo y navegación, hero con headline grande y botón de acción, sección de bienvenida, productos destacados en carousel, beneficios del negocio, testimonios de clientes, preguntas frecuentes y footer con información de contacto.

Para la página de menú, se tomará como referencia el diseño mostrado en la Image 5 (estilo Malang Lounge), el cual presenta un menú elegante con categorías filtrables mediante tabs, y cada plato se muestra en una card con imagen, nombre, descripción y precio. Esta distribución se adaptará a la temática pastel de Adixion Food.

El menú del restaurante, tal como se muestra en las Image 2 y Image 3, contiene las siguientes categorías con sus precios:
- Hot Dogs (8 opciones, desde $2.5 hasta $6)
- Burgers (8 opciones, desde $6 hasta $9)
- Pollo Frito (2, 3 y 6 piezas)
- Entradas (alas de pollo, papas fritas, tequeños)
- Bebidas (refrescos, agua, sodas, cervezas)

Se utilizarán las imágenes que ya existen en el proyecto (hamburger_1.png, hamburger_2.png, hamburger_3.png) como placeholders temporales, las cuales el usuario irá actualizando con imágenes reales del negocio.

En resumen: Crear un sitio web de dos páginas (Home y Menú) para Adixion Food, con temática pastel rosada heredada de su negocio de repostería, siguiendo la distribución del sitio de referencia Arturos para el home y la distribución de un menú elegante para la página de menú, usando el logo_2 como identidad visual, con imágenes placeholder que serán actualizadas posteriormente.

# ============================================
# 1. IDENTIDAD DEL PROYECTO
# ============================================

Nombre del negocio: Adixion Food
Tipo: Restaurante de comida rápida (extensión de repostería de postres)
Ubicación: Av Independencia con Av Los Medanos, Edificio Zarifa, PB local 2, Coro, Edo Falcón, Venezuela
Teléfono: 04146822025
Horario: Todos los días de 5:00 PM a 12:00 AM

Logo oficial: public/references/logo_2.png
Logo principal: public/logo.jpeg
Imágenes existentes: public/hamburger_1.png, hamburger_2.png, hamburger_3.png

# ============================================
# 2. PALETA DE COLORES
# ============================================

Colores pasteles (temática de repostería):

Primario:        #E91E8C (magenta/rosado fuerte)
Primario claro:  #F472B6 (pink-400)
Primario oscuro: #BE185D (pink-700)
Primario 50:     #FDF2F8 (rosado muy claro)
Primario 100:    #FCE7F3 (rosado claro)
Primario 200:    #FBCFE8 (rosado suave)
Primario 300:    #F9A8D4 (rosado intermedio)

Fondo general:   #FFF5F7 (crema rosado)
Fondo alterno:   #FECDD3 (rosado medio claro)
Superficie:      #FFFFFF (blanco)

Texto principal:  #1C1917 (oscuro)
Texto secundario:#57534E (gris oscuro)
Texto atenuado:  #A8A29E (gris claro)

Borde:           #F9A8D4
Borde claro:     #FBCFE8

WhatsApp:        #25D366 (verde WhatsApp)

# ============================================
# 3. TIPOGRAFÍA
# ============================================

Fuente Display (títulos grandes Hero): Bebas Neue
Fuente Heading (subtítulos, cards):    Poppins
Fuente Body (texto corrido):           Inter

Tamaños de fuente (clamp responsive):
- Hero:      clamp(3rem, 8vw, 6rem)
- Sección:   clamp(2rem, 5vw, 3.5rem)
- Subtítulo: clamp(1.25rem, 3vw, 1.75rem)
- Cuerpo:    1rem
- Pequeño:   0.875rem
- Precio:    1.5rem

# ============================================
# 4. ESPACIADOS Y DIMENSIONES
# ============================================

Padding secciones:  clamp(3rem, 8vw, 6rem)
Ancho máximo:       1280px (container)
Padding cards:      1.5rem
Border radius cards:1rem
Sombras cards:      0 4px 6px -1px rgba(233, 30, 140, 0.1)
Sombras hover:      0 10px 25px -5px rgba(233, 30, 140, 0.2)
Sombras botones:    0 4px 14px rgba(233, 30, 140, 0.4)

# ============================================
# 5. STACK TECNOLÓGICO
# ============================================

Framework:     Next.js 16 (App Router)
UI Library:    React 19
Estilos:       Tailwind CSS v4 (configuración vía CSS, NO tailwind.config.js)
Lenguaje:      TypeScript 5
PostCSS:       @tailwindcss/postcss

NO se usan librerías externas adicionales (sin Framer Motion, sin shadcn, etc.)
Todo se construye desde cero con Tailwind y React.

# ============================================
# 6. ESTRUCTURA DE ARCHIVOS
# ============================================

app/
├── globals.css
├── layout.tsx
├── page.tsx                    (HOME)
├── menu/
│   └── page.tsx                (PÁGINA MENÚ)
│
components/
├── ui/                         (componentes atómicos reutilizables)
│   ├── index.ts
│   ├── Button/
│   │   ├── index.ts
│   │   ├── Button.tsx
│   │   └── Button.types.ts
│   ├── Card/
│   │   ├── index.ts
│   │   ├── Card.tsx
│   │   └── Card.types.ts
│   ├── Badge/
│   │   ├── index.ts
│   │   ├── Badge.tsx
│   │   └── Badge.types.ts
│   └── Accordion/
│       ├── index.ts
│       ├── Accordion.tsx
│       ├── Accordion.types.ts
│       └── Accordion.hooks.ts
│
├── Navbar/
│   ├── index.ts
│   ├── Navbar.tsx
│   ├── Navbar.types.ts
│   └── Navbar.data.ts
│
├── Hero/
│   ├── index.ts
│   ├── Hero.tsx
│   ├── Hero.types.ts
│   └── Hero.data.ts
│
├── Marquee/
│   ├── index.ts
│   ├── Marquee.tsx
│   ├── Marquee.types.ts
│   └── Marquee.data.ts
│
├── About/
│   ├── index.ts
│   ├── About.tsx
│   ├── About.types.ts
│   └── About.data.ts
│
├── FeaturedProducts/
│   ├── index.ts
│   ├── FeaturedProducts.tsx
│   ├── FeaturedProducts.types.ts
│   ├── FeaturedProducts.data.ts
│   └── FeaturedProducts.hooks.ts
│
├── Benefits/
│   ├── index.ts
│   ├── Benefits.tsx
│   ├── Benefits.types.ts
│   └── Benefits.data.ts
│
├── Testimonials/
│   ├── index.ts
│   ├── Testimonials.tsx
│   ├── Testimonials.types.ts
│   ├── Testimonials.data.ts
│   └── Testimonials.hooks.ts
│
├── FAQ/
│   ├── index.ts
│   ├── FAQ.tsx
│   ├── FAQ.types.ts
│   ├── FAQ.data.ts
│   └── FAQ.hooks.ts
│
├── CTABanner/
│   ├── index.ts
│   ├── CTABanner.tsx
│   ├── CTABanner.types.ts
│   └── CTABanner.data.ts
│
├── Footer/
│   ├── index.ts
│   ├── Footer.tsx
│   ├── Footer.types.ts
│   └── Footer.data.ts
│
├── MenuHeader/
│   ├── index.ts
│   ├── MenuHeader.tsx
│   ├── MenuHeader.types.ts
│   └── MenuHeader.data.ts
│
├── MenuCategories/
│   ├── index.ts
│   ├── MenuCategories.tsx
│   ├── MenuCategories.types.ts
│   ├── MenuCategories.data.ts
│   └── MenuCategories.hooks.ts
│
├── MenuItemCard/
│   ├── index.ts
│   ├── MenuItemCard.tsx
│   ├── MenuItemCard.types.ts
│   └── MenuItemCard.data.ts
│
└── WhatsAppButton/
    ├── index.ts
    ├── WhatsAppButton.tsx
    ├── WhatsAppButton.types.ts
    └── WhatsAppButton.data.ts

# ============================================
# 7. PRINCIPIO DE CADA ARCHIVO
# ============================================

- componente.tsx:      Lógica JSX del componente (server component por defecto, client solo si tiene interacción)
- componente.types.ts: Interfaces y tipos TypeScript usados
- componente.data.ts:  Datos estáticos (items del menú, textos, navegación, testimonios)
- componente.hooks.ts: Custom hooks (useAccordion, useCarousel, useMenuFilter)
- index.ts:            Exportación pública del componente

# ============================================
# 8. HOME PAGE - SECCIONES (app/page.tsx)
# ============================================

Sección 1: NAVBAR
- Logo: logo_2.png alineado a la izquierda
- Links: Inicio, Menú, Ubicación, Contacto
- Responsive: hamburger menu en mobile
- Fondo: rosa claro con sombra sutil
- Sticky top

Sección 2: HERO
- Headline grande (font-display Bebas Neue): "Descubre el verdadero sabor"
- Subtítulo: "Comida rápida con el toque dulce de una repostería"
- CTA Button: "Ver Menú" → navega a /menu
- Imagen de fondo: hamburger_1.png como placeholder
- Fondo: degradado rosa
- Full width, min-height 80vh

Sección 3: MARQUEE
- Texto animado en scroll infinito: "ADIXION FOOD • COMIDA RÁPIDA • SABOR QUE ENAMORA • CALIDAD QUE SORPRENDE"
- Fondo: primary (#E91E8C)
- Texto blanco, font-display
- Altura compacta

Sección 4: ABOUT
- Título: "Bienvenidos a Adixion Food"
- Texto: Descripción del negocio como extensión de repostería de postres
- Imagen: hamburger_2.png como placeholder
- Layout: 2 columnas (texto izquierda, imagen derecha)
- Fondo: blanco

Sección 5: PRODUCTOS DESTACADOS
- Título: "Nuestros Platos Estrella"
- Subtítulo: "Ver menú" (link a /menu)
- Carousel de 4 cards visibles (scroll horizontal en mobile)
- Cada card: imagen + nombre + precio + botón "Ordenar" → WhatsApp
- Productos destacados:
  * Hot Dog de la Casa - $6
  * Burger Doble - $9
  * Pollo Frito 6 Piezas - $18
  * Alas de Pollo 10 Piezas - $8
- Fondo: rosa claro

Sección 6: BENEFICIOS
- 3 columnas (stack en mobile)
- Icono + título + descripción:
  1. "Sabor Único" - Recetas propias con el toque de nuestra repostería
  2. "Ingredientes Frescos" - Solo lo mejor para nuestros clientes
  3. "Receta de la Casa" - Sabores que solo encontrarás en Adixion
- Fondo: blanco

Sección 7: TESTIMONIOS
- Título: "Lo que dicen nuestros clientes"
- Carousel de cards con:
  * 5 estrellas (rating)
  * Comillas decorativas
  * Texto de la reseña
  * Avatar + nombre del cliente
- 3 testimonios de ejemplo (placeholder)
- Fondo: rosa claro

Sección 8: FAQ (PREGUNTAS FRECUENTES)
- Título: "Preguntas Frecuentes"
- Acordeón expandible con preguntas:
  1. "¿Cómo puedo hacer un pedido?"
  2. "¿Hacen entrega a domicilio?"
  3. "¿Cuál es el horario?"
  4. "¿Dónde están ubicados?"
  5. "¿Aceptan tarjetas de crédito?"
- Fondo: blanco

Sección 9: CTA BANNER
- Headline: "¡Ordena ahora y disfruta!"
- Subtítulo: "Te esperamos todos los días de 5pm a 12am"
- CTA Button: "Ordenar por WhatsApp" → wa.me/584146822025
- Fondo: primary con degradado
- Texto blanco

Sección 10: FOOTER
- Logo centrado
- Redes sociales: Instagram, TikTok, Facebook, WhatsApp
- Dirección completa
- Horario: Todos los días 5:00 PM - 12:00 AM
- Teléfono: 04146822025
- Google Maps embed (ubicación)
- Links: Inicio, Menú, Contacto
- Copyright: © 2025 Adixion Food. Todos los derechos reservados.
- Fondo: primary oscuro (#BE185D)

Sección 11: BOTÓN WHATSAPP FLOTANTE
- Posición: fixed, bottom-right
- Ícono de WhatsApp
- Enlace: wa.me/58416822025
- Color: #25D366
- Sombra y animación float
- Siempre visible sobre todo el contenido

# ============================================
# 9. PÁGINA MENÚ (app/menu/page.tsx)
# ============================================

Sección 1: MENU HEADER
- Hero banner con fondo rosa
- Título grande: "Nuestro Menú"
- Subtítulo: "Descubre todos nuestros sabores"
- Full width, altura compacta (50vh)

Sección 2: MENU CATEGORIES (TABS)
- Tabs horizontales scrollables en mobile:
  * Todos
  * Hot Dogs
  * Burgers
  * Pollo Frito
  * Entradas
  * Bebidas
- Tab activo: fondo primary, texto blanco
- Tab inactivo: fondo blanco, borde rosa
- Filtro: al hacer click se muestran solo los items de esa categoría
- "Todos" muestra todo el menú agrupado por categoría

Sección 3: MENU ITEMS GRID
- Grid responsive:
  * Mobile: 1 columna
  * Tablet: 2 columnas
  * Desktop: 3-4 columnas
- Cada MenuItemCard contiene:
  * Imagen del producto (placeholder temporal)
  * Nombre del producto
  * Descripción (ingredientes)
  * Precio
  * Botón "Ordenar" → WhatsApp con mensaje predefinido
- Agrupados por categoría cuando se selecciona "Todos"
- Separadores visuales entre categorías

# ============================================
# 10. DATOS DEL MENÚ COMPLETO
# ============================================

--- HOT DOGS ---
Hot Dog Sencillo      | $2.5  | Salchicha tipo wiener, repollo morado, blanco y cilantro, papitas ralladas, queso de año, ketchup y mayonesa
Hot Dog Tradicional   | $2.8  | Salchicha tipo wiener, repollo morado, blanco y cilantro, papitas ralladas, queso de res, ketchup y mayonesa
Hot Dog Clásico       | $3.5  | Salchicha tipo wiener, repollo morado, blanco y cilantro, papitas ralladas, queso gouda holandés, ketchup y mayonesa
Hot Dog Americano     | $4.5  | Salchicha tipo wiener, pepinilo, cebolla morada, queso parmesano, tocineta, cheddar ketchup y mayonesa
Pepepers Hot Dog      | $4.5  | Salchicha tipo wiener, salteado de pimentones rojos, amarillos, verdes y cebollas moradas, repollo morado con blanco y cilantro, maíz, queso gouda holandés ketchup y mayonesa
Pizza Dog             | $5    | Salchicha tipo wiener, queso mozzarella fundido con maíz, pepperoni a la plancha, tocineta y salsa napolitana
Hot Dog Premium       | $5    | Salchicha tipo wiener, queso de res con aceitunas negras aderezado a la plancha, aguacate, tomate, ensalada de repollo morado con blanco y crema de leche, ketchup y mayonesa
Hot Dog de la Casa    | $6    | Chorizo de pollo ahumado, pepinilo, cebolla morada, queso de res aderezado a la plancha, tocineta, ketchup, mayonesa y mostaza

--- BURGERS ---
Burger Kids           | $6    | 160gr de carne, queso kraft, papas ruffles, salsa de tomate y mayonesa
Burger Smash          | $7.5  | 160gr de carne, queso kraft, tocineta, pepinilo, cebolla a la plancha
Burger Americana      | $8    | 160gr de carne, queso kraft, tocineta, pepinillo, cebolla a la plancha, lechuga, tomate y papas ruffles
Burger de Pollo       | $8    | 160gr de pollo a la plancha, queso kraft, pepinillo, tocineta, cebolla a la plancha, lechuga, tomate y papas ruffles
Burguer Mixta         | $8    | 80gr de carne, 80gr de pollo a la plancha, queso kraft, queso de res a la plancha, tocineta, pepinillo, cebolla a la plancha
Burguer Pizza         | $8.5  | 160gr de carne, queso mozzarella fundido con maíz, tomate, pepperoni, tocineta y salsa napolitana
Burger Criolla        | $8.5  | 160gr de carne, queso de res a la plancha, aguacate, huevo, tocineta, cebolla a la plancha, lechuga, tomate
Burger Doble          | $9    | 320gr de carne, queso kraft, tocineta, pepinillo, lechuga, tomate, cebolla a la plancha, papas ruffles
Todas las hamburguesas incluyen papas fritas

--- POLLO FRITO ---
2 Piezas              | $6    | Incluye ensalada rayada y arepitas fritas
3 Piezas              | $9    | Incluye ensalada rayada y arepitas fritas
6 Piezas              | $18   | Incluye ensalada rayada y arepitas fritas
Todos los servicios incluyen ensalada rayada y arepitas fritas

--- ENTRADAS ---
Serv. Alas de Pollo 6 piezas  | $5
Serv. Alas de Pollo 10 piezas | $8
Serv. Papas Fritas            | $4.5
Serv. de Tequeños 6 piezas    | $3.5
Serv. de Tequeños 10 piezas   | $6

--- BEBIDAS ---
Refrescos de Botella   | $1
Agua Pequeña           | $1.2
Agua Mediana           | $1.5
Soda                   | $1.5
Lipton                 | $2.5
Malta                  | $0.80
Nestea                 | $2.4
Refresco 1.5LTS        | $3
Cervezas de Botella    | $0.90
Cerveza de Lata        | $1.3

# ============================================
# 11. NAVEGACIÓN Y LINKS
# ============================================

Navbar Links:
- Inicio → /
- Menú → /menu
- Ubicación → #ubicacion (anchor al footer)
- Contacto → wa.me/58416822025

Footer Links:
- Inicio → /
- Menú → /menu
- Contacto → wa.me/58416822025

# ============================================
# 12. ACCIONES WHATSAPP
# ============================================

Todos los botones de acción redirigen a WhatsApp:

Botón "Ver Menú" (Hero)     → Navega a /menu (NO WhatsApp)
Botón "Ordenar" (cards)     → wa.me/58416822025?text=Hola, quiero pedir [nombre del producto]
Botón "Ordenar por WhatsApp" → wa.me/58416822025?text=Hola, quiero hacer un pedido
Botón flotante WhatsApp     → wa.me/58416822025
Botón "Contáctanos"         → wa.me/58416822025

# ============================================
# 13. RESPONSIVIDAD
# ============================================

Mobile (< 640px):
- Navbar: hamburger menu toggle
- Hero: headline reducido, stack vertical
- Cards: 1 columna
- Menu grid: 1 columna
- Tabs menú: scroll horizontal
- Footer: stack vertical, mapa full width

Tablet (640px - 1024px):
- Navbar: links visibles
- Cards: 2 columnas
- Menu grid: 2 columnas
- Footer: 2 columnas

Desktop (> 1024px):
- Navbar: links completos
- Cards: 3-4 columnas
- Menu grid: 3-4 columnas
- Footer: layout completo con mapa

# ============================================
# 14. ANIMACIONES
# ============================================

- Marquee: scroll infinito de texto (translateX de 0 a -50%)
- WhatsApp button: animación float ( translateY de 0 a -10px)
- Cards hover: sombra aumentada + ligero scale
- Accordion: transición grid-template-rows de 0fr a 1fr
- Tabs: transición de fondo suave

# ============================================
# 15. COMPONENTES UI ATÓMICOS
# ============================================

Button:
- Variantes: primary, secondary, outline, ghost
- Tamaños: sm, md, lg
- Estados: default, hover, disabled
- Soporte para "as" (link o button)

Card:
- Container con padding, border-radius, sombra
- Hover state con sombra elevada
- Background blanco

Badge:
- Variantes: primary, secondary, outline
- Tamaños: sm, md

Accordion:
- Client component (usa useState)
- Header clickeable con ícono chevron
- Contenido expandible con animación
- Soporte para múltiples abiertos o solo uno

# ============================================
# 16. CONVENCIONES DE CÓDIGO
# ============================================

- Componentes server por defecto, client solo cuando hay interacción
- Todos los tipos en archivos .types.ts separados
- Todos los datos en archivos .data.ts separados
- Custom hooks en archivos .hooks.ts
- Exports.named desde index.ts
- Clases Tailwind utilitarian (no custom CSS salvo animaciones)
- Sin comentarios en el código salvo que se solicite
- Formato: 2 espacios de indentación
- Props interface: NombreComponenteProps
- Funciones: nombreDelComponente.tsx

# ============================================
# 17. IMÁGENES PLACEHOLDER
# ============================================

Se usan las imágenes existentes como placeholder hasta que el usuario las actualice:
- public/hamburger_1.png → Hero, About
- public/hamburger_2.png → FeaturedProducts
- public/hamburger_3.png → FeaturedProducts
- public/references/logo_2.png → Navbar, Footer
- public/logo.jpeg → alternativa

# ============================================
# 18. ORDEN DE IMPLEMENTACIÓN
# ============================================

Paso 1:  globals.css (design tokens, fuentes, animaciones)
Paso 2:  layout.tsx (fuentes, metadata, lang="es")
Paso 3:  components/ui/ (Button, Card, Badge, Accordion)
Paso 4:  components/Navbar/
Paso 5:  components/Footer/
Paso 6:  components/WhatsAppButton/
Paso 7:  components/Hero/
Paso 8:  components/Marquee/
Paso 9:  components/About/
Paso 10: components/FeaturedProducts/
Paso 11: components/Benefits/
Paso 12: components/Testimonials/
Paso 13: components/FAQ/
Paso 14: components/CTABanner/
Paso 15: components/MenuHeader/
Paso 16: components/MenuCategories/
Paso 17: components/MenuItemCard/
Paso 18: app/page.tsx (ensamblar Home)
Paso 19: app/menu/page.tsx (ensamblar Menú)
Paso 20: Verificar responsive + polish final

# ============================================
# 19. CONDICIONES ESPECIALES
# ============================================

- El logo_2.png es el que se usa para el sitio (NO el logo.jpeg principal)
- La temática es PASTEL/REPOSTERÍA, no fast food agresivo
- Los colores pasteles son la identidad visual del negocio
- El "X" del logo tiene color magenta, eso define la paleta
- NO se usan animaciones complejas (sin librerías externas)
- TODO el contenido es en español
- El mapa de Google solo va en el footer
- El botón de WhatsApp siempre visible (position fixed)

# ============================================
# FIN DEL PLAN
# ============================================
