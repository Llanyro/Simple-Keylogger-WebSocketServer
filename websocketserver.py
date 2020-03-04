import asyncio
import websockets


async def servidorEscucha(websocket, path):
    async for message in websocket:
        print(message)
        await websocket.send("")

start_server = websockets.servidorEscucha(echo, "localhost", 9090)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
