import type { Project } from "@common/index";

export const projects: Project[] = [
  {
    "title": "Function-Space Transformer with Adaptive Anchors",
    "status": "arXiv 2609.38348 · Submitted to ICLR 2027",
    "paper": "https://arxiv.org/abs/2609.38348",
    "description": [
      "Proposed Recursive FST for operator learning to preserve local detail and capture long-range dependencies with a compact latent representation.",
      "Designed input-dependent spatial anchors and recursive attention over a continuous feature field. The model supports queries at arbitrary coordinates.",
      "Experiments evaluate the framework on PDE prediction and image classification."
    ],
    "tags": [
      "Neural Operators",
      "Transformers",
      "Continuous Representations"
    ],
    "featured": true
  },
  {
    "title": "Hamiltonian-Guided Trajectory Generation",
    "status": "Extended paper submitted to ICRA 2027",
    "description": [
      "Proposed Hamiltonian-guided diffusion to generate physically plausible robotic trajectories across variable horizons without a simulator at inference.",
      "Formulated an energy function from Hamiltonian residuals for guided sampling. Gradient guidance and importance resampling use this energy to steer the diffusion denoising process.",
      "Evaluation uses simulated robot-arm trajectories in MuJoCo. This ongoing project extends our ICLR 2026 ReALM-GEN Workshop paper."
    ],
    "tags": [
      "Diffusion Models",
      "Hamiltonian Dynamics",
      "Guided Sampling",
      "Robotics"
    ],
    "paper": "https://openreview.net/forum?id=MJl3bBLMM3",
    "featured": true
  },
  {
    "title": "Pose-Guided Person Image Generation (M.S. Thesis)",
    "status": "M.S. thesis, Beijing University of Technology",
    "description": [
      "Built a diffusion model for pose-guided person image generation with a three-branch U-Net and mixed classifier-free guidance.",
      "Achieved the best SSIM and PSNR compared with PIDM, UPGPT, NTED, and DPTN."
    ],
    "tags": [
      "Diffusion Models",
      "Image Generation",
      "Computer Vision"
    ],
    "featured": true
  },
  {
    "title": "ConSinger",
    "status": "ICASSP 2025 · Equal contribution",
    "description": [
      "Co-developed a consistency model for efficient singing voice synthesis. Designed a quality scorer to select the denoising starting point.",
      "On PopCS: 2.8× faster than DiffSinger (RTF 0.018 vs. 0.052), better FAD (0.32 vs. 0.88), and MOS 3.88 vs. 3.81."
    ],
    "tags": [
      "Consistency Models",
      "Audio Generation",
      "Singing Voice Synthesis"
    ],
    "demo": "https://keylxiao.github.io/consinger",
    "paper": "https://arxiv.org/abs/2410.15342",
    "featured": true,
    "startDate": "2024-07",
    "endDate": "2024-12"
  }
];
