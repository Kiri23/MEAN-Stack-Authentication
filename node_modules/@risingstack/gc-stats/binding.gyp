{
  "targets": [
    {
      "target_name": "gc-stats",
      "sources": [
        "src/gcstats.cc"
      ],
      "include_dirs": [
        "src",
        "<!(node -e \"require('nan')\")"
      ]
    },
    {
      "target_name": "action_after_build",
      "type": "none",
      "dependencies": [
        "<(module_name)"
      ],
      "copies": [
        {
          "files": [
            "<(PRODUCT_DIR)/<(module_name).node"
          ],
          "destination": "<(module_path)"
        }
      ]
    }
  ]
}
