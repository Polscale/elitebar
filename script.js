// Datos del Menú
const menuData = [
    // Desayunos
    {
        id: 1,
        name: "Desayuno Americano",
        category: "desayunos",
        price: "1500 CUP",
        description: "Ración de huevo al gusto, tostada,mayonesa , bacon y café",
        image: "https://i.ibb.co/FbbTZch3/Desayuno-americano.jpg",
        tags: ["Popular", "Completo"]
    },
    {
        id: 2,
        name: "Panqueques",
        category: "desayunos",
        price: "$6.00",
        description: "Esponjosos panqueques con miel, mantequilla y frutas frescas",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop",
        tags: ["Dulce", "Favorito"]
    },
    {
        id: 3,
        name: "Tostadas Francesas",
        category: "desayunos",
        price: "$5.50",
        description: "Tostadas doradas con canela, azúcar glass y sirope de maple",
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&h=400&fit=crop",
        tags: ["Clásico"]
    },
    {
        id: 25,
        name: "Papa Horneada",
        category: "desayunos",
        price: "$7.50",
        description: "Papa horneada con mantequilla y hierbas aromáticas",
        image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=600&h=400&fit=crop",
        tags: ["Clásico"]
    },
    // Cocteles
    {
        id: 4,
        name: "Mojito Cubano",
        category: "cocteles",
        price: "$7.00",
        description: "Ron blanco, hierbabuena fresca, lima, azúcar y soda",
        image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&h=400&fit=crop",
        tags: ["Signature", "Refrescante"]
    },
    {
        id: 5,
        name: "Daiquirí Natural",
        category: "cocteles",
        price: "$6.50",
        description: "Ron Havana Club, lima fresca, azúcar y hielo frappe",
        image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=400&fit=crop",
        tags: ["Clásico", "Tropical"]
    },
    {
        id: 6,
        name: "Cuba Libre",
        category: "cocteles",
        price: "$5.50",
        description: "Ron añejo, Coca-Cola, lima fresca y hielo",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop",
        tags: ["Popular"]
    },
    {
        id: 7,
        name: "Piña Colada",
        category: "cocteles",
        price: "$8.00",
        description: "Ron blanco, crema de coco, jugo de piña y hielo frappe",
        image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=600&h=400&fit=crop",
        tags: ["Cremoso", "Tropical"]
    },
    {
        id: 8,
        name: "Margarita Premium",
        category: "cocteles",
        price: "$9.00",
        description: "Tequila premium, triple sec, lima fresca y sal de mar",
        image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&h=400&fit=crop",
        tags: ["Premium", "Cítrico"]
    },

    // Entrantes
    {
        id: 9,
        name: "Tabla de Carnes Frías",
        category: "entrantes",
        price: "$12.00",
        description: "Selección de jamón serrano, salchichón, queso manchego y aceitunas",
        image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=600&h=400&fit=crop",
        tags: ["Compartir", "Gourmet"]
    },
    {
        id: 10,
        name: "Croquetas de Bacon",
        category: "entrantes",
        price: "$7.50",
        description: "Croquetas caseras de bacon",
        image: "https://i.postimg.cc/W3NV1GXf/croquetas-bacon-mejor.png",
        tags: ["Casero", "Crujiente"]
    },
    {
        id: 11,
        name: "Tostones Rellenos",
        category: "entrantes",
        price: "$8.00",
        description: "Plátanos verdes fritos rellenos de camarones al ajillo",
        image: "https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=600&h=400&fit=crop",
        tags: ["Cubano", "Popular"]
    },
    {
        id: 12,
        name: "Brusquetas Marineras",
        category: "entrantes",
        price: "$9.50",
        description: "Pan tostado con tomate rallado, aceite de oliva y mariscos frescos",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&h=400&fit=crop",
        tags: ["Mar", "Mediterráneo"]
    },

    // Platos Principales
    {
        id: 13,
        name: "Ropa Vieja",
        category: "principales",
        price: "$15.00",
        description: "Carne desmechada en salsa criolla, con arroz y plátanos maduros",
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop",
        tags: ["Tradicional", "Signature"]
    },
    {
        id: 14,
        name: "Filete de Pescado Grillé",
        category: "principales",
        price: "$18.00",
        description: "Pescado fresco a la parrilla con verduras asadas y papas",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=400&fit=crop",
        tags: ["Saludable", "Mar"]
    },
    {
        id: 15,
        name: "Chuletas de Cerdo a la Parrilla",
        category: "principales",
        price: "$16.50",
        description: "Chuletas marinadas con mojo criollo, yuca y ensalada",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop",
        tags: ["Parrilla", "Jugoso"]
    },
    {
        id: 16,
        name: "Langosta Enchilada",
        category: "principales",
        price: "$35.00",
        description: "Langosta fresca en salsa picante criolla con arroz blanco",
        image: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=600&h=400&fit=crop",
        tags: ["Premium", "Picante", "Lujo"]
    },
    {
        id: 17,
        name: "Paella Élite",
        category: "principales",
        price: "$22.00",
        description: "Arroz con mariscos, pollo, chorizo y azafrán (para 2 personas)",
        image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=600&h=400&fit=crop",
        tags: ["Compartir", "Especial"]
    },

    // Postres
    {
        id: 18,
        name: "Tres Leches",
        category: "postres",
        price: "$6.00",
        description: "Bizcocho empapado en tres tipos de leche con crema batida",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",
        tags: ["Tradicional", "Dulce"]
    },
    {
        id: 19,
        name: "Flan de Caramelo",
        category: "postres",
        price: "$5.50",
        description: "Flan casero con caramelo líquido y crema",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=400&fit=crop",
        tags: ["Clásico", "Casero"]
    },
    {
        id: 20,
        name: "Helado Gourmet",
        category: "postres",
        price: "$7.00",
        description: "Tres bolas de helado artesanal con frutas y sirope",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop",
        tags: ["Frío", "Refrescante"]
    },

    // Vinos y Bebidas
    {
        id: 21,
        name: "Vino Tinto Reserva",
        category: "vinos",
        price: "$25.00",
        description: "Botella de vino tinto español, cosecha reserva",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=400&fit=crop",
        tags: ["Botella", "Premium"]
    },
    {
        id: 22,
        name: "Champagne Brut",
        category: "vinos",
        price: "$45.00",
        description: "Champagne francés para celebraciones especiales",
        image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&h=400&fit=crop",
        tags: ["Celebración", "Lujo"]
    },
    {
        id: 23,
        name: "Cerveza Artesanal",
        category: "vinos",
        price: "$4.50",
        description: "Cerveza local artesanal, rubia o negra",
        image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&h=400&fit=crop",
        tags: ["Local", "Refrescante"]
    },
    {
        id: 24,
        name: "Sangría de la Casa",
        category: "cocteles",
        price: "$18.00",
        description: "Sangría con vino tinto, frutas y especias",
        image: "https://i.postimg.cc/xCpdrpn7/sangria-2.png",
        tags: ["Compartir", "Frutal"]
    }
];

// Variables globales
let currentCategory = 'all';
let modal = null;

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    renderMenu();
    initializeFilters();
    initializeModal();
    initializeScrollEffects();
    initializeContactForm();
});

// Navegación
function initializeNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menú móvil
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Navegación suave
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    
                    // Cerrar menú móvil
                    navMenu.classList.remove('active');
                    
                    // Actualizar link activo
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });

    // Cambiar navbar al hacer scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26, 26, 26, 0.98)';
        } else {
            navbar.style.background = 'rgba(26, 26, 26, 0.95)';
        }
    });
}

// Renderizar menú
function renderMenu(category = 'all') {
    const menuGrid = document.getElementById('menuGrid');
    const filteredItems = category === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === category);

    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="menu-item" data-id="${item.id}" onclick="openModal(${item.id})">
            <img src="${item.image}" alt="${item.name}" class="menu-item-image" loading="lazy">
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-title">${item.name}</h3>
                    <span class="menu-item-price">${item.price}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <span class="menu-item-category">${getCategoryName(item.category)}</span>
            </div>
        </div>
    `).join('');

    // Animación de entrada
    const items = menuGrid.querySelectorAll('.menu-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.animation = 'fadeInUp 0.5s ease forwards';
        }, index * 50);
    });
}

// Filtros
function initializeFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Actualizar botón activo
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filtrar menú
            const category = btn.getAttribute('data-category');
            currentCategory = category;
            renderMenu(category);
        });
    });
}

// Modal
function initializeModal() {
    modal = document.getElementById('itemModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;

    document.getElementById('modalImage').src = item.image;
    document.getElementById('modalImage').alt = item.name;
    document.getElementById('modalTitle').textContent = item.name;
    document.getElementById('modalDescription').textContent = item.description;
    document.getElementById('modalPrice').textContent = item.price;
    
    const tagsHTML = item.tags.map(tag => 
        `<span class="modal-tag">${tag}</span>`
    ).join('');
    document.getElementById('modalTags').innerHTML = tagsHTML;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Efectos de scroll
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar secciones
    const sections = document.querySelectorAll('.menu-section, .about-section, .contact-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// Formulario de contacto
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simular envío
            const btn = form.querySelector('.btn');
            const originalText = btn.textContent;
            
            btn.textContent = 'Enviando...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.textContent = '¡Mensaje Enviado!';
                btn.style.background = '#4CAF50';
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.style.background = '';
                    form.reset();
                }, 2000);
            }, 1500);
        });
    }
}

// Obtener nombre de categoría
function getCategoryName(category) {
    const names = {
        'desayunos': 'Desayunos',
        'cocteles': 'Cocteles',
        'entrantes': 'Entrantes',
        'principales': 'Principales',
        'postres': 'Postres',
        'vinos': 'Bebidas'
    };
    return names[category] || category;
}

// Animación de entrada para CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
