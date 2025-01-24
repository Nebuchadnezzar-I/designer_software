<script>
import {
    onMount
} from "svelte";

let items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
];

let visibleItems = [];

function handleIntersection(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            if (!visibleItems.includes(index)) {
                visibleItems = [...visibleItems, index];
            }
        }
    });
}

let observer;
onMount(() => {
    observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1,
    });

    const elements = document.querySelectorAll(".item");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
});
</script>
  
  <style>
.item {
    margin: 20px 0;
    height: 100px;
    background-color: #f3f3f3;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s, transform 0.3s;
}

.visible {
    opacity: 1;
    transform: translateY(0);
}
</style>

<div>
    {#each items as item, i}
    <div
        class="item {visibleItems.includes(i.toString()) ? 'visible' : ''}"
        data-index={i}
        >
        {item}
    </div>
    {/each}
</div>
