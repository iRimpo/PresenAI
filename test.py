import asyncio

from hume import HumeStreamClient, StreamSocket
from hume.models.config import ProsodyConfig

async def main():
    client = HumeStreamClient("84NYC5ic1tuULwmGuVCzJ9n9csaFezkAiWyU1CqqMfHQRuyD")
    config = ProsodyConfig()
    async with client.connect([config]) as socket:
        result = await socket.send_file("Insert/file")
        print(result)

asyncio.run(main())