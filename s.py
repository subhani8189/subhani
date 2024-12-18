import subprocess
import os

def compile_c_program(source_file):
    # Compile the C source file
    compile_command = f"gcc {source_file} -o {os.path.splitext(source_file)[0]}"
    result = subprocess.run(compile_command, shell=True, capture_output=True, text=True)

    # Check for errors
    if result.returncode != 0:
        print("Compilation failed:")
        print(result.stderr)
    else:
        print("Compilation successful:")
        print(result.stdout)

if __name__ == "__main__":
    # Replace 'your_program.c' with the path to your C source file
    c_source_file = 'subbu.c'
    compile_c_program(c_source_file)
