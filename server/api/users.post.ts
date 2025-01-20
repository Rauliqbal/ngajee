export default defineEventHandler(async (event) => {
   const { name } = await readBody(event);
   localStorage.setItem("username", name);
});
