import os
import re

tools_dir = r"c:\Users\adith\Downloads\My-personal-website-main\tools"

nav_template = """    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <a href="/" class="logo hover-target">SNAPBLITZ</a>
            <div class="nav-links desktop-nav">
                <a href="/" class="hover-target">Home</a>
                <a href="/about-adithyan-m/" class="hover-target">About</a>
                <a href="/collaborate/" class="hover-target">Collaborate</a>
                <a href="/contact/" class="hover-target">Contact</a>
            </div>
            <button class="hamburger hover-target" aria-label="Toggle Menu">
                <span class="line"></span>
                <span class="line"></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Navigation Overlay -->
    <div class="mobile-nav">
        <div class="mobile-nav-links">
            <a href="/" class="mobile-link">Home</a>
            <a href="/about-adithyan-m/" class="mobile-link">About</a>
            <a href="/collaborate/" class="mobile-link">Collaborate</a>
            <a href="/contact/" class="mobile-link">Contact</a>
        </div>
    </div>"""

footer_template = """    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <a href="/" class="logo footer-logo hover-target">SNAPBLITZ</a>
                <div class="footer-links">
                    <a href="/" class="hover-target">Home</a>
                    <a href="/about-adithyan-m/" class="hover-target">About</a>
                    <a href="/collaborate/" class="hover-target">Collaborate</a>
                    <a href="/contact/" class="hover-target">Contact</a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Adithyan M &middot; Tech Content Creator (SnapBlitz). All rights reserved.</p>
                <p>Kerala, India 🌴</p>
            </div>
        </div>
    </footer>"""

for tool in os.listdir(tools_dir):
    tool_path = os.path.join(tools_dir, tool, "index.html")
    if not os.path.exists(tool_path):
        continue
    
    with open(tool_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Replace Nav
    content = re.sub(r'<!-- Navigation -->.*?</div>\s*</div>', nav_template, content, flags=re.DOTALL)
    
    # Replace Footer
    content = re.sub(r'<!-- Footer -->.*?</footer>', footer_template, content, flags=re.DOTALL)
    
    # Add defer to script
    content = content.replace('<script src="../script.js"></script>', '<script src="../script.js" defer></script>')
    content = content.replace('<script src="../../script.js"></script>', '<script src="/script.js" defer></script>')
    
    # Fix paths to root
    content = content.replace('href="../index.html"', 'href="/"')
    content = content.replace('href="../../index.html"', 'href="/"')
    
    # Simplify the text content and add h3s
    # We will do a generic rewrite for the experience text to break it up and remove keyword stuffing
    # Extract the text
    exp_match = re.search(r'<div class="tool-experience-text">(.*?)</div>', content, re.DOTALL)
    if exp_match:
        original_text = exp_match.group(1)
        paragraphs = re.findall(r'<p>(.*?)</p>', original_text, re.DOTALL)
        
        if len(paragraphs) >= 3:
            # We break into Intro, Process, and Conclusion
            new_text = "\n"
            new_text += f"            <h3>Introduction and Early Journey</h3>\n"
            new_text += f"            <p>{paragraphs[0]}</p>\n"
            if len(paragraphs) > 1:
                new_text += f"            <p>{paragraphs[1]}</p>\n"
            
            if len(paragraphs) > 3:
                new_text += f"            <h3>Workflow and Creative Process</h3>\n"
                new_text += f"            <p>{paragraphs[2]}</p>\n"
                new_text += f"            <p>{paragraphs[3]}</p>\n"
            
            # For the last paragraph, we strip the keyword stuffing string
            last_p = paragraphs[-1]
            last_p = re.sub(r'Anyone searching for.*?working with.*?\.', '', last_p)
            last_p = re.sub(r'Anyone searching for.*?working inside.*?\.', '', last_p)
            
            new_text += f"            <h3>Current Usage</h3>\n"
            new_text += f"            <p>{last_p} To learn more about the overall content creation process, visit the <a href=\"/about-adithyan-m/\" style=\"color: var(--text-color); text-decoration: underline;\">About Adithyan M</a> page.</p>\n"
            new_text += "        "
            
            content = content.replace(exp_match.group(0), f'<div class="tool-experience-text">{new_text}</div>')
    
    with open(tool_path, "w", encoding="utf-8") as f:
        f.write(content)

print("Tool pages updated successfully!")
