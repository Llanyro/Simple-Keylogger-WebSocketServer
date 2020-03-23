import asyncio
import websockets


async def servidorEscucha(websocket, path):
    async for message in websocket:
        print(message)
        await websocket.send("")

start_server = websockets.serve(servidorEscucha, "localhost", 9090) # Change your ip here if not local

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
