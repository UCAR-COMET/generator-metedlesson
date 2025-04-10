import os
import shutil

source_folder = 'meted_import'
destination_folder = 'src/routes'

for filename in os.listdir(source_folder):
    if filename.endswith('.htm'):
        folder_name = os.path.splitext(filename)[0]
        new_folder_path = os.path.join(destination_folder, folder_name)
        os.makedirs(new_folder_path, exist_ok=True)
        with open(os.path.join(new_folder_path, '+page.svelte'), 'w') as f:
            f.write('<script>\n  // Your Svelte code here\n</script>\n\n<style>\n  /* Your styles here */\n</style>\n')