<script>
    let {entry} = $props()
</script>

<div class="p-10 space-y-10 border-2 flex flex-col">
    <article class="prose-xl">
        <h2>
            <p>{entry.title}</p>
        </h2>
        <div >
            <p>{entry.content}</p>
        </div>
        <div>
            <p>{entry.date}</p>
        </div>
    </article>

</div>