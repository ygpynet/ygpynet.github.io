<template>
    <div class="feelback-container" data-feelback-set="id-from-panel">
        <span>Do you like this page?</span>
        <button data-feelback-value="y">Yes</button>
        <button data-feelback-value="n">No</button>
    </div>
</template>

<script setup>
const ENDPOINT = "https://api.feelback.dev/v0";

async function sendFeelback({ contentSetId, key, value }) {
    const response = await fetch(ENDPOINT + "/feelbacks/create", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            contentSetId: "faaa4289-d57b-46e9-b7ab-bb9f053de521",
            key: "posts-likes",
            value
        })
    });

    // returns the feelbackId and, if enabled, a revocable token
    return await response.json();
}
</script>