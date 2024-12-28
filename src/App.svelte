<script lang="ts">
    import svelteLogo from './assets/svelte.svg'
    import viteLogo from '/vite.svg'
    import Counter from './lib/Entry.svelte'

</script>

<main>
    <form class="border p-4 w-[400px] bg-blue-100 flex flex-col space-y-2">
        <input type="text" name="title">
        <input type="date">
        <textarea id="markdown-editor" name="description" rows="15"></textarea>
    </form>
    <textarea id="markdown-editor"></textarea>

</main>

<style>

</style>
