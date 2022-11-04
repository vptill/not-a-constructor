import { defineNuxtPlugin } from '#app'
import simpleDDP from 'simpleddp';
import { simpleDDPLogin } from 'simpleddp-plugin-login';
import ws from 'isomorphic-ws';
export default defineNuxtPlugin(async function (nuxtApp) {
  const server = new simpleDDP({
    endpoint: 'wss://test.com/websocket',
    SocketConstructor: ws,
    reconnectInterval: 5000
  }, [simpleDDPLogin])
  await server.connect()
  nuxtApp.vueApp.use(server)

  return {
    provide: {
      server: server
    }
  }
})