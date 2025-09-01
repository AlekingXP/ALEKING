# hola_mundo.py

from datetime import datetime

def main():
    print("Hola, mundo!")
    with open("fecha_actual.txt", "w") as file:
        file.write(f"Fecha y hora actual: {datetime.now()}\n")

if __name__ == "__main__":
    main()
