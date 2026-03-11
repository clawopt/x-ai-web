import os
import json

ROOT_DIR = "."
DOCS_DIR = "docs"
EXCLUDE_DIRS = {".git", ".github", "node_modules", "docs", "scripts"}
EXCLUDE_FILES = {"build_docs.py", "package.json", "package-lock.json", "README.md"}

def generate_sidebar(structure):
    sidebar = []
    for category, files in structure.items():
        items = []
        for file in files:
            name = os.path.splitext(file)[0]
            items.append({"text": name, "link": f"/{category}/{name}"})
        sidebar.append({
            "text": category,
            "items": items,
            "collapsed": False
        })
    return sidebar

def main():
    structure = {}
    
    # 1. Scan directories
    for item in os.listdir(ROOT_DIR):
        if os.path.isdir(item) and item not in EXCLUDE_DIRS and not item.startswith("."):
            category_path = os.path.join(DOCS_DIR, item)
            os.makedirs(category_path, exist_ok=True)
            structure[item] = []
            
            for file in os.listdir(item):
                if file.endswith(".sh"):
                    structure[item].append(file)
                    src_path = os.path.join(ROOT_DIR, item, file)
                    dest_path = os.path.join(category_path, os.path.splitext(file)[0] + ".md")
                    
                    # Read source content
                    with open(src_path, "r", encoding="utf-8") as f:
                        content = f.read()
                    
                    md_content = f"# {file}\n\n```bash\n{content}\n```\n"
                    
                    # Check if destination exists and content matches to avoid unnecessary writes
                    if os.path.exists(dest_path):
                        with open(dest_path, "r", encoding="utf-8") as f:
                            existing_content = f.read()
                        if existing_content == md_content:
                            continue

                    with open(dest_path, "w", encoding="utf-8") as f:
                        f.write(md_content)

    # 2. Generate sidebar config
    sidebar = generate_sidebar(structure)
    
    config = {
        "title": "Ops Scripts",
        "description": "常用运维脚本合集",
        "themeConfig": {
            "search": {
                "provider": "local"
            },
            "sidebar": sidebar,
            "nav": [
                {"text": "Home", "link": "/"},
                {"text": "GitHub", "link": "https://github.com/clawopt/ops-scripts"}
            ]
        }
    }

    # Write config.json that can be imported or used to generate config.mts
    # However, for simplicity, let's just write the config.mts directly using a template
    # Since we are using python, we'll write a js file that exports the object.
    
    config_js_content = f"""
import {{ defineConfig }} from 'vitepress'

export default defineConfig({json.dumps(config, ensure_ascii=False, indent=2)})
"""
    
    with open(os.path.join(DOCS_DIR, ".vitepress", "config.mts"), "w", encoding="utf-8") as f:
        f.write(config_js_content)

    # 3. Create index.md
    index_content = """
# Ops Scripts

欢迎使用运维脚本合集。

## 分类

"""
    for category in structure:
        index_content += f"- [{category}](./{category}/)\n"
        # Create category index
        cat_index_path = os.path.join(DOCS_DIR, category, "index.md")
        cat_content = f"# {category}\n\n"
        for file in structure[category]:
            name = os.path.splitext(file)[0]
            cat_content += f"- [{file}](./{name})\n"
        with open(cat_index_path, "w", encoding="utf-8") as f:
            f.write(cat_content)

    with open(os.path.join(DOCS_DIR, "index.md"), "w", encoding="utf-8") as f:
        f.write(index_content)

if __name__ == "__main__":
    main()
