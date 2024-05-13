import os
import json

def generate_json():
    image_folder = 'Icons'
    json_data = {
        "name": "图标收集",
        "description": "自用icon图标,144×144",
        "icons": []
    }
    #递归遍历Icons文件夹及其子文件夹中的。png文件
    for root, dirs, files in os.walk(image_folder):
        for file in files:
           if file.endswith(".png"):
               filename = os.path.splitext(file)[0]
               image_path = os.path.join(root, file).replace('\\', '/')  #保证路径在所有操作系统上的一致性
               raw_url = f"https://raw.githubusercontent.com/{os.environ['GITHUB_REPOSITORY']}/main/{image_path}"
               json_data["icons"].append({"name": filename, "url": raw_url})

    # 按照name键对列表中的字典进行排序
    json_data["icons"].sort(key=lambda item:item['name'])

    # 将json数据写入icons.json文件
    output_path = os.path.join(os.getcwd(), 'icons.json')

    with open(output_path, 'w', encoding='utf-8') as json_file:
        json.dump(json_data, json_file, ensure_ascii=False, indent=2)

    # 更新环境文件
    with open(os.environ['GITHUB_STATE'], 'a') as state_file:
        state_file.write(f"ICONS_JSON_PATH={output_path}\n")

if __name__ == "__main__":
    generate_json()
