import { Router } from "./router"

const router = new Router()

router.add("/sobre", "/view/pages/sobre.html")
router.add("/contatos", "/view/pages/contatos.html")
router.add("/entrar", "/view/pages/form.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()