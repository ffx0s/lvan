<template>
  <div>
    <Navbar title="SwipeCell" />
    <Notice title="用移动设备查看" />
    <Group title="默认">
      <SwipeCell
        @cancel="cancelHandler"
        @delete="deleteHandler"
        title="左右可滑动"
        describe="左滑取消删除，右滑回复"
        isLink
      >
        <div
          slot="left"
          class="v-swipe-cell__item"
          style="color: #fff;background-color: #2196f3;"
          @click="$toast('回复')"
        >
          回复
        </div>
      </SwipeCell>
      <SwipeCell
        cancelText=""
        @delete="deleteHandler"
        title="左滑"
        describe="左滑删除"
      />
      <SwipeCell
        deleteText=""
        cancelText="自定义取消文案"
        @cancel="cancelHandler"
        title="左滑"
        describe="左滑取消"
      />
    </Group>

    <Group title="自定义内容">
      <SwipeCell title="右侧自定义">
        <div
          slot="right"
          class="v-swipe-cell__item"
          style="color: #fff;background-color: pink;"
        >
          置顶
        </div>
      </SwipeCell>
      <SwipeCell deleteText="" cancelText="" title="左侧自定义">
        <div slot="left" style="background-color: white;">
          <VButton type="icon">
            <img
              src="../../assets/images/icon-delete.svg"
              style="width:20px;height:20px;"
            />
          </VButton>
        </div>
      </SwipeCell>
    </Group>

    <Group title="自定义确认删除">
      <SwipeCell
        v-for="(item, index) in items"
        :key="item"
        :value="item"
        @cancel="cancelHandler"
        @delete="deleteHandler2(index)"
        @click="$toast(`Index ${index}`)"
        confirmDeleteText=""
        title="左滑"
        describe="左滑删除"
        isLink
      />
    </Group>

    <ActionSheet
      describe="删除后不可恢复，确定要删除吗？"
      :actions="deleteActions"
      v-transfer-dom
      v-model="showDeleteMenus"
      @click="confirmDelete"
    />
  </div>
</template>

<script>
import Group from 'lvan/cell/group'
import SwipeCell from 'lvan/swipeCell'
import ActionSheet from 'lvan/actionsheet'
import Notice from 'lvan/notice'

export default {
  name: 'page-swipe-cell',
  components: {
    Group,
    SwipeCell,
    ActionSheet,
    Notice
  },
  data() {
    return {
      items: [1, 2, 3],
      deleteIndex: 0,
      showDeleteMenus: false,
      deleteActions: [{ name: '删除', type: 'warning', delete: true }]
    }
  },
  methods: {
    cancelHandler(close) {
      this.$toast('取消')
      close()
    },
    deleteHandler(close) {
      this.$toast('删除')
      close()
    },
    deleteHandler2(index) {
      this.deleteIndex = index
      this.showDeleteMenus = true
    },
    confirmDelete(action) {
      if (action.delete) {
        this.items.splice(this.deleteIndex, 1)
      }
      this.showDeleteMenus = false
    }
  }
}
</script>
