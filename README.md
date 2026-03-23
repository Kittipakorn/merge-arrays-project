# Merge Sorted Arrays (TypeScript)

This project implements a custom function to merge three sorted arrays into a single ascending sorted array **without using any built-in `sort()` functions**.

## 🧠 Algorithmic Approach (Two Pointers)
To achieve optimal performance, this solution utilizes a Two-Pointer technique:
1. **Merge Ascending:** First, it merges `collection_1` and `collection_2` (both naturally sorted in ascending order) in $O(N)$ time.
2. **Merge Descending:** Then, it merges the result with `collection_3`. Since `collection_3` is sorted in descending order, the pointer starts from the end (`length - 1`) and moves backwards, effectively treating it as an ascending array.
- **Time Complexity:** $O(N)$ where N is the total number of elements across all three arrays.

## 🚀 How to Run the Code
**Prerequisites:** Node.js installed on your machine.

```bash
# 1. Clone the repository
git clone https://github.com/Kittipakorn/merge-arrays-project
cd merge-arrays-project

# 2. Install dependencies
npm install

# 3. Run the program
npx ts-node src/index.ts
```

    

## 🧪 Testing

Unit tests are implemented using Jest, covering:

- Empty arrays  
- Duplicate values  
- Uneven array sizes  
- Large number gaps  

**Run tests**
  ```bash
  npm test
```


## 🤖 AI Usage Disclosure
AI tools were used to support parts of this project:

- **Project Setup:** Assistance with configuring `tsconfig.json` and `Jest`
- **Testing:** Generating comprehensive edge-case scenarios

> ✅ All core logic and algorithm design were implemented and verified manually.
