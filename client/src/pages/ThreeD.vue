<template>
	<div>
        <canvas id="glcanvas" width="400" height="400">
            Your browser doesn't appear to support the HTML5 <code>&lt;canvas&gt;</code> element.
        </canvas>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
            return {}
        },
        mounted() {
            this.setUp();
        },
        methods: {
            setUp() {
                const canvas = document.querySelector("#glcanvas");
                const gl = canvas.getContext("webgl");
                if (!gl) {
                    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
                    return;
                }
                console.log(gl);

                // Set clear color to black, fully opaque
                gl.clearColor(0.0, 0.0, 0.0, 1.0);
                // Clear the color buffer with specified clear color
                gl.clear(gl.COLOR_BUFFER_BIT);
            }
        }
	}
</script>

<style type="text/css" lang="pcss">
    #glcanvas {
        border: 1px solid #cccccc;
    }
</style>