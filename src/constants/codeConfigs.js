export const DEFAULT_CODE = {
  javascript: `function canPartition(nums) {
const n = nums.length;
let target = nums.reduce((a, b) => a + b, 0);

if (target % 2 !== 0) return false;
target = Math.floor(target / 2);

const dp = Array.from({ length: n }, () => Array(target + 1).fill(false));

if (nums[0] <= target) {
    dp[0][nums[0]] = true;
    visualize(dp, 2, "blue",[0, nums[0]]);
}

for (let i = 1; i < n; i++) {
    visualize(dp, 2, "blue",[i,0]);
    for (let t = 0; t <= target; t++) {
    const notTake = dp[i - 1][t];
    let take = false;
    if (t >= nums[i]) {
        take = dp[i - 1][t - nums[i]];
    }
    dp[i][t] = take || notTake;

    visualize(dp, 2,"red", [i, t]);
    }
}

return dp[n - 1][target];
}

// Example usage
return canPartition([1, 5, 11, 5]);
  `,

  python: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                visualize(arr, 1, "red", [j+1])

arr = [64, 34, 25, 12, 22, 11, 90]
visualize(arr, 1, "black", [0])
bubble_sort(arr)
print("Sorted array is:", arr)
  `,
};
