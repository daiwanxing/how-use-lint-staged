<script setup>
import { shuffle } from "lodash-es";
import { faker } from "@faker-js/faker";

shuffle(new Array(100).fill("").map(() => faker.address.city()));
</script>
