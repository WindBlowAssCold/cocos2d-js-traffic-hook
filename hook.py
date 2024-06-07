# -*- coding: utf-8 -*-
import frida
import time

with open("scripts/hook_accept.ts", "r") as f:
    jscode = f.read()

process = frida.get_usb_device(-1).attach("<process_name>")
script = process.create_script(jscode)
print("[*] Loading script...")
script.load()
print("[*] Script loaded.")

while 1:
    time.sleep(1000)
