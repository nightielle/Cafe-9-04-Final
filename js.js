document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const headerSpacer = document.getElementById('header-spacer');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });

    document.addEventListener('DOMContentLoaded', function() {
        // Handle mobile dropdown menus
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
        
        if (window.innerWidth <= 768) {
            dropdownToggles.forEach(toggle => {
                toggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    const parent = this.parentElement;
                    const dropdown = parent.querySelector('.dropdown-menu');
                    
                    // Toggle the dropdown visibility
                    if (dropdown.style.display === 'block') {
                        dropdown.style.display = 'none';
                        this.classList.remove('active');
                    } else {
                        dropdown.style.display = 'block';
                        this.classList.add('active');
                    }
                });
            });
        }
    })

    document.addEventListener('DOMContentLoaded', function() {
        // Handle mobile dropdown menus
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
        
        if (window.innerWidth <= 768) {
            dropdownToggles.forEach(toggle => {
                toggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    const parent = this.parentElement;
                    const dropdown = parent.querySelector('.dropdown-menu');
                    
                    // Toggle the dropdown visibility
                    if (dropdown.style.display === 'block') {
                        dropdown.style.display = 'none';
                        this.classList.remove('active');
                    } else {
                        dropdown.style.display = 'block';
                        this.classList.add('active');
                    }
                });
            });
        }
    });

    // Set initial header spacer height
    function updateHeaderSpacer() {
        const headerHeight = header.offsetHeight;
        headerSpacer.style.height = headerHeight + 'px';
    }
    
    // Update spacer on load and resize
    updateHeaderSpacer();
    window.addEventListener('resize', updateHeaderSpacer);
    
    // Shrink header on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 40px';
        } else {
            header.style.padding = '20px 40px';
        }
        
        // Update spacer after scroll effect changes header size
        updateHeaderSpacer();
    });
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Update spacer height when menu expands/collapses
        setTimeout(updateHeaderSpacer, 300);
    });
    
    // Shopping cart functionality
    const cartDropdown = document.querySelector('.cart-dropdown');
    const cartItems = document.querySelector('.cart-items');
    const emptyCartMessage = document.querySelector('.empty-cart-message');
    const totalAmount = document.querySelector('.total-amount');
    const clearBtn = document.querySelector('.clear-btn');
    const checkoutBtn = document.querySelector('.checkout-btn');
    
    let cart = [];
    let itemCount = 0;
    
    // Generate random price for demo purposes
    function getRandomPrice() {
        return (Math.floor(Math.random() * 1500) / 100 + 8).toFixed(2);
    }
    
    // Update cart display
    function updateCartDisplay() {
        cartCount.textContent = itemCount;
        
        // Clear current items
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            emptyCartMessage.style.display = 'block';
            totalAmount.textContent = '$0.00';
        } else {
            emptyCartMessage.style.display = 'none';
            
            // Calculate total
            let total = 0;
            
            // Add items to cart display
            cart.forEach((item, index) => {
                total += parseFloat(item.price);
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price}</div>
                    <div class="cart-item-remove" data-index="${index}">✕</div>
                `;
                cartItems.appendChild(cartItem);
                
                // Add remove functionality
                cartItem.querySelector('.cart-item-remove').addEventListener('click', function(e) {
                    e.stopPropagation();
                    const index = parseInt(this.getAttribute('data-index'));
                    removeFromCart(index);
                });
            });
            
            totalAmount.textContent = `$${total.toFixed(2)}`;
        }
    }
    
    // Add item to cart
    function addToCart(name) {
        const price = `$${getRandomPrice()}`;
        cart.push({ name, price });
        itemCount++;
        updateCartDisplay();
    }
    
    // Remove item from cart
    function removeFromCart(index) {
        cart.splice(index, 1);
        itemCount--;
        updateCartDisplay();
    }
    
    // Toggle cart dropdown
    cartIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        cartDropdown.classList.toggle('active');
    });
    
    // Close cart when clicking outside
    document.addEventListener('click', function(e) {
        if (!cartIcon.contains(e.target)) {
            cartDropdown.classList.remove('active');
        }
    });
    
    // Clear cart
    clearBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        cart = [];
        itemCount = 0;
        updateCartDisplay();
    });
    
    // Checkout
    checkoutBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (cart.length > 0) {
            alert(`Thank you for your order! Total: ${totalAmount.textContent}`);
            cart = [];
            itemCount = 0;
            updateCartDisplay();
            cartDropdown.classList.remove('active');
        } else {
            alert('Your cart is empty');
        }
    });
    
    // Add to cart functionality for menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const itemName = this.querySelector('h3').textContent;
            addToCart(itemName);
            alert(`Added ${itemName} to your cart!`);
        });
    });
});

        // Menu data
        const menuData = {
            "rice-bowls": {
                title: "Rice Bowls",
                description: "INCLUDES: Garlic Rice, Egg and Upgrade to regular drink of choice for Php 79",
                items: [
                    {
                        name: "Burger Steak",
                        description: "Prepared by a Japanese mother using her family's own recipe from Japan. Made with original mushroom sauce and surprise inside.",
                        price: 189,
                        options: []
                    },
                    {
                        name: "Chicken Adobo",
                        description: "Choice chicken cut cooked following a family recipe from a town in Central Iloilo",
                        price: 189,
                        options: []
                    },
                    {
                        name: "Pork Adobo",
                        description: "Premium pork used in a homemade recipe",
                        price: 189,
                        options: []
                    },
                    {
                        name: "Chicken Bola-Bola",
                        description: "4 pieces of homemade chicken balls in barbecue sauce",
                        price: 189,
                        options: []
                    },
                    {
                        name: "Beef Tapa",
                        description: "Pure beef in sukiyaki cut marinated to your palates delight",
                        price: 199,
                        options: []
                    }
                ]
            },
            "pasta": {
                title: "Pasta",
                description: "For sharing. INCLUDES: 150 grams of pasta, homemade sauces, cheese and toasted bread",
                items: [
                    {
                        name: "Malunggay Garlic Parmesan",
                        price: 189,
                        options: []
                    },
                    {
                        name: "Gourmet Tuyo Pasta",
                        price: 189,
                        options: []
                    },
                    {
                        name: "Hungarian Sausage Spaghetti",
                        price: 189,
                        options: []
                    },
                    {
                        name: "Cheesy Marinara w/ Chicken Balls",
                        price: 199,
                        options: []
                    },
                    {
                        name: "Spicy Chorizo Linguine",
                        price: 199,
                        options: []
                    },
                    {
                        name: "Seafood Marinara",
                        price: 209,
                        options: []
                    },
                    {
                        name: "4 Cheese Bacon Penne",
                        price: 219,
                        options: []
                    }
                ]
            },
            "sandwiches": {
                title: "Sandwiches",
                description: "For sharing. INCLUDES: Premium whole wheat loaf or baguette with nachos on the side",
                items: [
                    {
                        name: "Wheat Bun Burger",
                        price: 179,
                        options: []
                    },
                    {
                        name: "Kogi Spamwich",
                        description: "Original spam and kimchi in between 2 pieces of baguette",
                        price: 209,
                        options: []
                    },
                    {
                        name: "Mix Sando Sliders",
                        description: "Sampler of Kogi Spamwich, D Club and Tuna Mango Cucumber",
                        price: 199,
                        options: []
                    },
                    {
                        name: "Tuna Mango Cucumber",
                        description: "Original tuna spread recipe with mango and cucumber on whole wheat loaf",
                        price: 199,
                        options: []
                    },
                    {
                        name: "Pork Hamwich",
                        description: "Homemade premium pork ham cured without extenders between 2 jumbo pandesal with nachos and dip on the side",
                        price: 219,
                        options: []
                    },
                    {
                        name: "904 D'Club",
                        description: "Our version of a club sandwich",
                        price: 219,
                        options: []
                    }
                ]
            },
            "pizza": {
                title: "Pizza",
                description: "For sharing. INCLUDES: 8 slices on a 12-inch plate",
                items: [
                    {
                        name: "2in1 Hawaiian and Sausage with Mushroom",
                        price: 369,
                        options: []
                    },
                    {
                        name: "2in1 Vegetarian and All Meat",
                        price: 369,
                        options: []
                    },
                    {
                        name: "Creamy Spinach",
                        description: "Keto dough and Sauce",
                        price: 369,
                        options: []
                    },
                    {
                        name: "Tuyo and Tomatoes",
                        description: "Homemade Gourmet tuyo with tomatoes",
                        price: 369,
                        options: []
                    }
                ]
            },
            "nachos": {
                title: "Nachos and More",
                description: "For sharing",
                items: [
                    {
                        name: "Nachos Overload",
                        description: "Nachos with meaty and creamy sauce topped with cucumber, tomatoes and lettuce",
                        price: 199,
                        options: []
                    },
                    {
                        name: "Nachos in Creamy Spinach dip",
                        description: "Nachos for non-meat eaters",
                        price: 149,
                        options: []
                    },
                    {
                        name: "Pancit Molo",
                        description: "500 liter soup of homemade molo balls",
                        price: 139,
                        options: []
                    },
                    {
                        name: "Garden Salad Bacon and Almonds",
                        price: 159,
                        options: []
                    },
                    {
                        name: "Garden Salad Tuna Mango and Chia",
                        price: 159,
                        options: []
                    }
                ]
            },
            "extras": {
                title: "Extras",
                items: [
                    {
                        name: "Nachos - 80grams",
                        price: 79,
                        options: []
                    },
                    {
                        name: "Toasted Bread - 3 pcs",
                        price: 49,
                        options: []
                    },
                    {
                        name: "Ranch",
                        price: 19,
                        options: []
                    },
                    {
                        name: "Egg",
                        price: 19,
                        options: []
                    }
                ]
            },
            "classic-coffee": {
                title: "Classic Coffee",
                description: "Regular size: 16oz | Upsize: 22oz",
                items: [
                    {
                        name: "Espresso",
                        price: 69,
                        options: [
                            {
                                name: "temperature",
                                options: ["HOT", "ICED"]
                            },
                            {
                                name: "size",
                                options: ["Regular", "Upsize (+10)"]
                            },
                            {
                                name: "milk",
                                options: ["No extra milk", "Regular milk (+19)", "Almond milk (+29)", "Oat milk (+49)"]
                            }
                        ]
                    },
                    {
                        name: "Maple Cinnamon Frappe",
                        price: 179,
                        options: [
                            {
                                name: "size",
                                options: ["Regular", "Upsize (+10)"]
                            },
                            {
                                name: "milk",
                                options: ["No extra milk", "Regular milk (+19)", "Almond milk (+29)", "Oat milk (+49)"]
                            }
                        ]
                    }
                ]
            },
            "frappe-cream": {
                title: "Frappe (Ice-Blended Cream)",
                description: "Regular size: 16oz | Upsize: 22oz",
                items: [
                    {
                        name: "Cucumber Kiwi Frappe",
                        price: 169,
                        options: [
                            {
                                name: "size",
                                options: ["Regular", "Upsize (+20)"]
                            },
                            {
                                name: "milk",
                                options: ["No extra milk", "Regular milk (+19)", "Almond milk (+29)", "Oat milk (+49)"]
                            }
                        ]
                    },
                    {
                        name: "Peach Mango Frappe",
                        price: 169,
                        options: [
                            {
                                name: "size",
                                options: ["Regular", "Upsize (+20)"]
                            },
                            {
                                name: "milk",
                                options: ["No extra milk", "Regular milk (+19)", "Almond milk (+29)", "Oat milk (+49)"]
                            }
                        ]
                    },
                    {
                        name: "Vanilla Matcha Frappe",
                        price: 169,
                        options: [
                            {
                                name: "size",
                                options: ["Regular", "Upsize (+20)"]
                            },
                            {
                                name: "milk",
                                options: ["No extra milk", "Regular milk (+19)", "Almond milk (+29)", "Oat milk (+49)"]
                            }
                        ]
                    },
                    {
                        name: "Double Choco Chip Frappe",
                        price: 169,
                        options: [
                            {
                                name: "size",
                                options: ["Regular", "Upsize (+20)"]
                            },
                            {
                                name: "milk",
                                options: ["No extra milk", "Regular milk (+19)", "Almond milk (+29)", "Oat milk (+49)"]
                            }
                        ]
                    },
                    {
                        name: "Berry Choco Chip Frappe",
                        price: 169,
                        options: [
                            {
                                name: "size",
                                options: ["Regular", "Upsize (+20)"]
                            },
                            {
                                name: "milk",
                                options: ["No extra milk", "Regular milk (+19)", "Almond milk (+29)", "Oat milk (+49)"]
                            }
                        ]
                    }
                ]
            },
            "sweet-tea": {
                title: "Sweet and Tea",
                items: [
                    {
                        name: "Black Tea",
                        price: 89,
                        options: [
                            {
                                name: "add",
                                options: ["No add-ons", "Add Milk (+29)"]
                            }
                        ]
                    },
                    {
                        name: "Green Tea",
                        price: 89,
                        options: [
                            {
                                name: "add",
                                options: ["No add-ons", "Add Honey (+29)"]
                            }
                        ]
                    },
                    {
                        name: "Choco Cream Cake (Slice)",
                        price: 149,
                        options: []
                    },
                    {
                        name: "Carrot Cake (Slice)",
                        price: 149,
                        options: []
                    },
                    {
                        name: "Frozen Sans Rival (Slice)",
                        price: 179,
                        options: []
                    },
                    {
                        name: "Dulce de Leche (Slice)",
                        price: 179,
                        options: []
                    },
                    {
                        name: "Salted Egg Cheesecake (Slice)",
                        price: 179,
                        options: []
                    }
                ]
            },
            "rock-salt": {
                title: "Rock Salt & Cheese",
                items: [
                    {
                        name: "Vanilla Bean Espresso",
                        price: 129,
                        options: [
                            {
                                name: "temperature",
                                options: ["HOT", "ICED"]
                            },
                            {
                                name: "size",
                                options: ["Regular", "Upsize (+20)"]
                            }
                        ]
                    },
                    {
                        name: "Iced Blended Vanilla Oreo",
                        price: 169,
                        options: [
                            {
                                name: "size",
                                options: ["Regular", "Upsize (+10)"]
                            }
                        ]
                    },
                    {
                        name: "Matcha Oreo",
                        price: 149,
                        options: [
                            {
                                name: "size",
                                options: ["Regular", "Upsize (+20)"]
                            }
                        ]
                    },
                    {
                        name: "Purple Yam Latte Rock Salt",
                        price: 149,
                        options: [
                            {
                                name: "size",
                                options: ["Regular", "Upsize (+20)"]
                            }
                        ]
                    }
                ]
            },
            "ice-cream": {
                title: "Ice Cream",
                description: "By happy endings, available in 8oz tub",
                items: [
                    {
                        name: "Pistachio",
                        price: 264,
                        options: []
                    },
                    {
                        name: "Salted Caramel",
                        price: 264,
                        options: []
                    },
                    {
                        name: "Speculoos Malt",
                        price: 264,
                        options: []
                    },
                    {
                        name: "Mango Float",
                        price: 249,
                        options: []
                    },
                    {
                        name: "Cookie Crumble",
                        price: 249,
                        options: []
                    },
                    {
                        name: "Malunggay",
                        price: 249,
                        options: []
                    },
                    {
                        name: "Baye Baye",
                        price: 264,
                        options: []
                    }
                ]
            }
        };

        // Cart data
        let cart = [];
        let cartId = 0;

        // Function to render menu items
        function renderMenuItems(category) {
            const menuContent = document.querySelector('.menu-content');
            const categoryData = menuData[category];
            
            menuContent.innerHTML = '';
            
            // Add category title and description
            const categoryTitle = document.createElement('h2');
            categoryTitle.classList.add('category-title');
            categoryTitle.textContent = categoryData.title;
            menuContent.appendChild(categoryTitle);
            
            if (categoryData.description) {
                const categoryDescription = document.createElement('p');
                categoryDescription.textContent = categoryData.description;
                menuContent.appendChild(categoryDescription);
            }
            
            // Add menu items
            categoryData.items.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.classList.add('menu-item');
                
                const itemDetails = document.createElement('div');
                itemDetails.classList.add('item-details');
                
                const itemName = document.createElement('div');
                itemName.classList.add('item-name');
                itemName.textContent = item.name;
                itemDetails.appendChild(itemName);
                
                if (item.description) {
                    const itemDescription = document.createElement('div');
                    itemDescription.classList.add('item-description');
                    itemDescription.textContent = item.description;
                    itemDetails.appendChild(itemDescription);
                }
                
                const itemPrice = document.createElement('div');
                itemPrice.classList.add('item-price');
                itemPrice.textContent = `₱${item.price.toFixed(2)}`;
                itemDetails.appendChild(itemPrice);
                
                menuItem.appendChild(itemDetails);
                
                const itemControls = document.createElement('div');
                itemControls.classList.add('item-controls');
                
                // Add options if any
                if (item.options && item.options.length > 0) {
                    const itemOptions = document.createElement('div');
                    itemOptions.classList.add('item-options');
                    
                    item.options.forEach(option => {
                        const select = document.createElement('select');
                        select.classList.add('option-select');
                        select.setAttribute('data-option', option.name);
                        
                        option.options.forEach(opt => {
                            const optElement = document.createElement('option');
                            optElement.value = opt;
                            optElement.textContent = opt;
                            select.appendChild(optElement);
                        });
                        
                        itemOptions.appendChild(select);
                    });
                    
                    itemControls.appendChild(itemOptions);
                }
                
                const addToCartBtn = document.createElement('button');
                addToCartBtn.classList.add('add-to-cart-btn');
                addToCartBtn.textContent = 'Add to Cart';
                addToCartBtn.addEventListener('click', () => {
                    // Get selected options
                    const selectedOptions = {};
                    if (item.options && item.options.length > 0) {
                        const selects = itemControls.querySelectorAll('.option-select');
                        selects.forEach(select => {
                            selectedOptions[select.getAttribute('data-option')] = select.value;
                        });
                    }
                    
                    // Calculate price with options
                    let totalPrice = item.price;
                    for (const option in selectedOptions) {
                        const optionValue = selectedOptions[option];
                        const match = optionValue.match(/\(\+(\d+)\)/);
                        if (match) {
                            totalPrice += parseInt(match[1]);
                        }
                    }
                    
                    // Add to cart
                    addToCart(item.name, totalPrice, selectedOptions);
                });
                
                itemControls.appendChild(addToCartBtn);
                menuItem.appendChild(itemControls);
                
                menuContent.appendChild(menuItem);
            });
        }

        // Function to add item to cart
        function addToCart(name, price, options) {
            const cartItem = {
                id: cartId++,
                name,
                price,
                options,
                quantity: 1
            };
            
            cart.push(cartItem);
            updateCartUI();
        }

        // Function to update cart UI
        function updateCartUI() {
            const cartItemsContainer = document.getElementById('cart-items');
            const cartTotalElement = document.querySelector('.cart-total');
            
            // Clear cart items
            cartItemsContainer.innerHTML = '';
            
            if (cart.length === 0) {
                const emptyCartMessage = document.createElement('div');
                emptyCartMessage.classList.add('empty-cart-message');
                emptyCartMessage.textContent = 'Your cart is empty';
                cartItemsContainer.appendChild(emptyCartMessage);
                cartTotalElement.textContent = 'Total: ₱0.00';
                return;
            }
            
            // Calculate total
            let total = 0;
            
            // Add cart items
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                
                const itemName = document.createElement('div');
                itemName.classList.add('cart-item-name');
                itemName.textContent = item.name;
                cartItem.appendChild(itemName);
                
                // Add options if any
                const itemOptions = document.createElement('div');
                itemOptions.classList.add('cart-item-options');
                let optionsText = '';
                for (const option in item.options) {
                    if (optionsText) optionsText += ', ';
                    optionsText += `${option}: ${item.options[option]}`;
                }
                itemOptions.textContent = optionsText || 'No options';
                cartItem.appendChild(itemOptions);
                
                const itemPrice = document.createElement('div');
                itemPrice.classList.add('cart-item-price');
                itemPrice.textContent = `₱${item.price.toFixed(2)}`;
                cartItem.appendChild(itemPrice);
                
                const itemQuantity = document.createElement('div');
                itemQuantity.classList.add('cart-item-quantity');
                
                const decreaseBtn = document.createElement('button');
                decreaseBtn.classList.add('quantity-btn');
                decreaseBtn.textContent = '-';
                decreaseBtn.addEventListener('click', () => {
                    if (item.quantity > 1) {
                        item.quantity--;
                        updateCartUI();
                    }
                });
                
                const quantityValue = document.createElement('span');
                quantityValue.classList.add('quantity-value');
                quantityValue.textContent = item.quantity;
                
                const increaseBtn = document.createElement('button');
                increaseBtn.classList.add('quantity-btn');
                increaseBtn.textContent = '+';
                increaseBtn.addEventListener('click', () => {
                    item.quantity++;
                    updateCartUI();
                });
                
                itemQuantity.appendChild(decreaseBtn);
                itemQuantity.appendChild(quantityValue);
                itemQuantity.appendChild(increaseBtn);
                cartItem.appendChild(itemQuantity);
                
                const itemSubtotal = document.createElement('div');
                itemSubtotal.classList.add('cart-item-subtotal');
                const subtotal = item.price * item.quantity;
                itemSubtotal.textContent = `₱${subtotal.toFixed(2)}`;
                cartItem.appendChild(itemSubtotal);
                
                const removeBtn = document.createElement('div');
                removeBtn.classList.add('cart-item-remove');
                removeBtn.textContent = '✕';
                removeBtn.addEventListener('click', () => {
                    cart = cart.filter(cartItem => cartItem.id !== item.id);
                    updateCartUI();
                });
                cartItem.appendChild(removeBtn);
                
                cartItemsContainer.appendChild(cartItem);
                
                total += subtotal;
            });
            
            cartTotalElement.textContent = `Total: ₱${total.toFixed(2)}`;
        }

        // Add event listeners to category buttons
        document.querySelectorAll('.category-button').forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                document.querySelectorAll('.category-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Render menu items for the selected category
                renderMenuItems(button.getAttribute('data-category'));
            });
        });

        // Add event listener to checkout button
        document.querySelector('.checkout-btn').addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty. Please add items before checking out.');
                return;
            }
            
            // Calculate total
            let total = 0;
            let orderSummary = 'Your Order Summary:\n\n';
            
            cart.forEach(item => {
                const subtotal = item.price * item.quantity;
                total += subtotal;
                
                let optionsText = '';
                for (const option in item.options) {
                    if (optionsText) optionsText += ', ';
                    optionsText += `${option}: ${item.options[option]}`;
                }
                
                orderSummary += `${item.quantity}x ${item.name}\n`;
                if (optionsText) orderSummary += `   Options: ${optionsText}\n`;
                orderSummary += `   Subtotal: ₱${subtotal.toFixed(2)}\n\n`;
            });
            
            orderSummary += `Total: ₱${total.toFixed(2)}`;
            
            alert('Order placed successfully!\n\n' + orderSummary);
            
            // Clear cart
            cart = [];
            updateCartUI();
        });

        // Initialize with first category
        document.querySelector('.category-button').classList.add('active');
        renderMenuItems(document.querySelector('.category-button').getAttribute('data-category'));

document.addEventListener('DOMContentLoaded', function () {
    const authOverlay = document.getElementById('authOverlay');
    const authTrigger = document.getElementById('authTrigger');
    const closeAuthOverlay = document.getElementById('closeAuthOverlay');
    const forms = document.querySelectorAll('.auth-form');
    const switchLinks = document.querySelectorAll('.form-switch-link');

    function showOverlay() {
        if (authOverlay) {
            authOverlay.style.display = 'flex';
            document.body.classList.add('auth-overlay-active');
            switchForm('loginForm');
            console.log('Auth overlay shown.');
        } else {
            console.error('Error: authOverlay element not found.');
        }
    }

    function hideOverlay() {
        if (authOverlay) {
            authOverlay.style.display = 'none';
            document.body.classList.remove('auth-overlay-active');
            console.log('Auth overlay hidden.');
        }
    }

    function switchForm(formIdToShow) {
        forms.forEach(form => {
            if (form.id === formIdToShow) {
                form.classList.add('active');
            } else {
                form.classList.remove('active');
            }
        });
        console.log(`Switched to form: ${formIdToShow}`);
    }

    if (authTrigger) {
        authTrigger.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Auth trigger clicked.');
            showOverlay();
        });
        console.log('Auth trigger event listener attached.');
    } else {
        console.error('Error: authTrigger element not found.');
    }

    if (closeAuthOverlay) {
        closeAuthOverlay.addEventListener('click', function () {
            hideOverlay();
        });
        console.log('Close button event listener attached.');
    } else {
        console.error('Error: closeAuthOverlay element not found.');
    }

    if (authOverlay) {
        authOverlay.addEventListener('click', function(event) {
            if (event.target === authOverlay) {
                hideOverlay();
            }
        });
        console.log('Overlay click listener attached.');
    } else {
        console.error('Error: authOverlay element not found for background click.');
    }

    switchLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetFormId = this.dataset.form;
            switchForm(targetFormId);
        });
        console.log('Switch link event listener attached.');
    });

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const formId = this.id;
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            let url = 'api/auth.php';
            let action = '';

            if (formId === 'loginForm') {
                action = 'login';
            } else if (formId === 'signupForm') {
                action = 'register';
            } else if (formId === 'adminLoginForm'){
                action = 'adminLogin';
            }

            url += '?action=' + action;

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(data)
            })
            .then(response => response.json())
            .then(result => {
                console.log('Backend Response:', result);
                if (result.message === 'Login successful' || result.message === 'Admin Login successful' || result.message === 'User registered successfully') {
                    alert(result.message);
                    hideOverlay();
                     if (result.data && result.data.isAdmin) {
                        window.location.href = 'admin_dashboard.php'; // Change to your admin page
                    } else {
                       // window.location.href = 'index.php';
                    }

                } else {
                    alert(result.message);
                }
            })
            .catch(error => {
                console.error('Fetch Error:', error);
                alert('An error occurred. Please try again.');
            });
        });
        console.log('Form submit listener attached:', form.id);
    });
});

        document.addEventListener('DOMContentLoaded', function () {
            const authOverlay = document.getElementById('authOverlay');
            const authTrigger = document.getElementById('authTrigger');
            const closeAuthOverlay = document.getElementById('closeAuthOverlay');
            const forms = document.querySelectorAll('.auth-form');
            const switchLinks = document.querySelectorAll('.form-switch-link');

            function showOverlay() {
                authOverlay.style.display = 'flex';
                document.body.classList.add('auth-overlay-active');
                switchForm('loginForm');
            }

            function hideOverlay() {
                authOverlay.style.display = 'none';
                document.body.classList.remove('auth-overlay-active');
            }

            function switchForm(formIdToShow) {
                forms.forEach(form => {
                    if (form.id === formIdToShow) {
                        form.classList.add('active');
                    } else {
                        form.classList.remove('active');
                    }
                });
            }

            if (authTrigger) {
                authTrigger.addEventListener('click', function (e) {
                    e.preventDefault();
                    showOverlay();
                });
            }

            if (closeAuthOverlay) {
                closeAuthOverlay.addEventListener('click', function () {
                    hideOverlay();
                });
            }

            authOverlay.addEventListener('click', function(event) {
                if (event.target === authOverlay) {
                    hideOverlay();
                }
            });

            switchLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetFormId = this.dataset.form;
                    switchForm(targetFormId);
                });
            });

            // Updated form submission handlers
            forms.forEach(form => {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const formId = this.id;
                    
                    if (formId === 'loginForm') {
                        // Get form data
                        const email = document.getElementById('loginEmail').value;
                        const password = document.getElementById('loginPassword').value;
                        
                        // Basic validation
                        if (!email || !password) {
                            alert('Please fill in all fields');
                            return;
                        }
                        
                        // Here you can add authentication logic
                        // For now, we'll just redirect to ORDER.html
                        console.log('User Login submitted');
                        
                        // Store login status (optional)
                        sessionStorage.setItem('userLoggedIn', 'true');
                        sessionStorage.setItem('userEmail', email);
                        
                        // Redirect to ORDER.html
                        window.location.href = 'ORDER.html';
                        
                    } else if (formId === 'signupForm') {
                        const fullName = document.getElementById('signupFullName').value;
                        const email = document.getElementById('signupEmail').value;
                        const password = document.getElementById('signupPassword').value;
                        const confirmPassword = document.getElementById('signupConfirmPassword').value;
                        
                        if (password !== confirmPassword) {
                            alert('Passwords do not match!');
                            return;
                        }
                        
                        console.log('Sign Up submitted');
                        alert('Account created successfully!');
                        
                        // Optionally redirect to ORDER.html after signup
                        sessionStorage.setItem('userLoggedIn', 'true');
                        sessionStorage.setItem('userEmail', email);
                        window.location.href = 'ORDER.html';
                        
                    } else if (formId === 'adminLoginForm') {
                        const adminEmail = document.getElementById('adminLoginEmail').value;
                        const adminPassword = document.getElementById('adminLoginPassword').value;
                        
                        if (!adminEmail || !adminPassword) {
                            alert('Please fill in all fields');
                            return;
                        }
                        
                        console.log('Admin Login submitted');
                        
                        // You might want to redirect admins to a different page
                        sessionStorage.setItem('adminLoggedIn', 'true');
                        sessionStorage.setItem('adminEmail', adminEmail);
                        
                        // Redirect to admin dashboard or ORDER.html
                        window.location.href = 'ORDER.html'; // or 'admin-dashboard.html'
                    }
                });
            });

            // JS for menu toggle
            const menuToggle = document.querySelector('.menu-toggle');
            const navMenu = document.getElementById('nav-menu');
            if (menuToggle && navMenu) {
                menuToggle.addEventListener('click', () => {
                    navMenu.classList.toggle('active');
                    menuToggle.classList.toggle('active');
                });
            }
        });


        