<script>
    import { page } from '$app/stores';
</script>

<div class="error-container">
    <div class="error-content">
        <h1>{$page.status}: {$page.error?.message || 'Page not found'}</h1>
        <p>Content unavailable.</p>
        <a href="./index.html" class="btn btn-primary">Back to Start Page</a>
    </div>
</div>